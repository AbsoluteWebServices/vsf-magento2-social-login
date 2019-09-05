<template>
  <div v-if="socialData" class="social-btn" :class="socialData.key + '-login'" @click="onClick">
    <slot :social="socialData">
      <a class="btn btn-block btn-social" :class="'btn-' + socialData.key">
        {{ $t('Login with') }} {{ $t(socialData.label) }}
      </a>
    </slot>
  </div>
</template>

<script>
import { KEY } from '../index'

export default {
  name: 'SocialLoginButton',
  props: {
    social: {
      type: [
        Object,
        String
      ],
      required: true
    }
  },
  data () {
    return {
      socialData: null,
      popupParams: {}
    }
  },
  computed: {
    socials () {
      return this.$store.state[KEY].socials
    }
  },
  created () {
    if (typeof this.social === 'object') {
      this.socialData = this.social
    } else {
      const filtered = this.socials.filter(item => item.key === this.social)

      if (filtered.length) {
        this.socialData = filtered[0]
      }
    }
  },
  mounted () {
    window.socialCallback = this.socialCallback
  },
  methods: {
    socialCallback (url, windowObj) {
      console.log(url)
      this.$bus.$emit('socialLogin-login', { social: this.socialData, url })
      // customerData.invalidate(['customer'])
      // customerData.reload(['customer'], true)

      // if (url !== '') {
      //   window.location.href = url
      // } else {
      //   window.location.reload(true)
      // }

      windowObj.close()
    },
    onClick () {
      window.open(this.socialData.url, this.socialData.label, this.getPopupParams())
    },
    getPopupParams (w, h, l, t) {
      this.popupParams.screenX = typeof window.screenX !== 'undefined' ? window.screenX : window.screenLeft
      this.popupParams.screenY = typeof window.screenY !== 'undefined' ? window.screenY : window.screenTop
      this.popupParams.outerWidth = typeof window.outerWidth !== 'undefined' ? window.outerWidth : document.body.clientWidth
      this.popupParams.outerHeight = typeof window.outerHeight !== 'undefined' ? window.outerHeight : (document.body.clientHeight - 22)
      this.popupParams.width = w || 500
      this.popupParams.height = h || 420
      this.popupParams.left = l || parseInt(this.popupParams.screenX + ((this.popupParams.outerWidth - this.popupParams.width) / 2), 10)
      this.popupParams.top = t || parseInt(this.popupParams.screenY + ((this.popupParams.outerHeight - this.popupParams.height) / 2.5), 10)

      return (
        'width=' + this.popupParams.width +
        ',height=' + this.popupParams.height +
        ',left=' + this.popupParams.left +
        ',top=' + this.popupParams.top
      )
    }
  }
}
</script>
