import { KEY, SOCIALS } from '../index'
import * as types from '../store/mutation-types'

export function afterRegistration ({ Vue, config, store, isServer }) {
  if (config.magento2SocialLogin) {
    const enabledSocials = []
    for (let i = 0; i < SOCIALS.length; i++) {
      const social = SOCIALS[i]

      if (config.magento2SocialLogin.socials.indexOf(social.key) !== -1) {
        enabledSocials.push({
          ...social,
          url: config.magento2SocialLogin.endpoint.login + '/type/' + social.key
        })
      }
    }

    store.commit(KEY + '/' + types.SET_SOCIALS, enabledSocials)
  }
}
