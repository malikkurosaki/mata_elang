import { hookstate, useHookstate } from '@hookstate/core'

export const scoreState =hookstate([])
export const testSocketState = hookstate("test socket state")

// export const scoreState = wrap((() => (hookstate([])))())


