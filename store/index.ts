import { Module } from 'vuex'
import { Magento2SocialLoginState } from '../types/Magento2SocialLoginState'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'
import { state } from './state'

export const module: Module<Magento2SocialLoginState, any> = {
    namespaced: true,
    mutations,
    actions,
    getters,
    state
}
