import { hookstate, StateFragment, useHookstate } from '@hookstate/core'
import store from 'store2';
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'

const globalState = hookstate(0);

/**
 * @param {StateMethods}  state
 * @param {String} name
*/
const wrapState = (state, name) => ({
    /**@type {[] | {} | Number | String} */
    get: state.value,
    /**@param {[] | {} | Number | String} value */
    set(value) {
        store(name, value)
        state.set(val => val = store(name))
    },
    init: (useEffect) => useEffect(() => state.set(store(name))),
    state: state,

})

const wrap2 = (type, name) => wrapState((() => (hookstate(type)))(), name);

export const gState = wrapState((() => (hookstate({})))(), "gState2");

export const dashboardScore =  hookstate([]);

export const accessGlobalState = () => wrapState(globalState)
export const useGlobalState = () => wrapState(useHookstate(globalState))
export const coba = hookstate("")

export default {
    xname: hookstate('malik'),
    chartLineOption: hookstate([]),
    nama: hookstate(""),
    persebaranState: hookstate({ "nama": "malik" }),
    trainAiState: hookstate({}),
}


