<template>
  <div class="block social-login-authentication-popup col-mp">
    <social-login-button v-for="social in socials" :key="social.key" :social="social" />
  </div>
</template>

<script>
import { KEY } from '../index'
import SocialLoginButton from './SocialLoginButton'

export default {
  name: 'SocialLoginButtons',
  components: {
    SocialLoginButton
  },
  computed: {
    socials () {
      return this.$store.state[KEY].socials
    }
  }
}
</script>
