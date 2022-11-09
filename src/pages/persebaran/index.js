import { StateFragment, useHookstate } from "@hookstate/core";
import { useEffect, useMemo, useState } from "react";
import store from "store2";
import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import xstate, { accessGlobalState, coba, gState, useGlobalState } from "../../xstate";

let berapa = 0;
const Persebaran = () => {
    const state = useHookstate(coba);
    useEffect(() => {
        state.set(store("apa"))
        console.log("apakah berubah")
    }, [])

    return <AdminLayout >
        {state.value}
        <button onClick={() => state.set("emangnya siapa")}>tekan aja</button>
    </AdminLayout>
}

export default Persebaran;