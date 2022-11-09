import store from "store2"


const satu = {
    get() {
        return store("satu2")
    },
    set(value) {
        store("satu2", value)
    }
}

export default {
    satu
}