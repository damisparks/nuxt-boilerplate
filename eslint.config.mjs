import { damisparks, vue } from '@damisparks/eslint-config'

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(damisparks({}, vue))
