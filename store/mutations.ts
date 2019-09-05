import { Magento2SocialLoginState } from '../types/Magento2SocialLoginState'
import { MutationTree } from 'vuex'
import * as types from './mutation-types'

export const mutations: MutationTree<Magento2SocialLoginState> = {
  [types.SET_SOCIALS] (state, socials) {
    state.socials = socials
  }
}
