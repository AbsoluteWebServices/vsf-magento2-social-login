import { createModule } from '@vue-storefront/core/lib/module'
import { afterRegistration } from './hooks/afterRegistration'
import { module } from './store'

export const KEY = 'm2-social-login'
export const Magento2SocialLogin = createModule({
  key: KEY,
  store: { modules: [{ key: KEY, module }] },
  afterRegistration
})

export const SOCIALS = [
  {
    key: 'google',
    label: 'Google'
  },
  {
    key: 'facebook',
    label: 'Facebook'
  }
]
