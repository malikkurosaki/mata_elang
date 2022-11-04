import { StateFragment } from "@hookstate/core";
import { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout/AdminLayout";
import xstate from "../../xstate";

const Persebaran = () => {
    useState(() => {
        xstate.persebaranState.set(val => val = { "nama": "siapa kira kira" })
    })
    return <AdminLayout >
        Persebaran
        <StateFragment state={xstate.persebaranState} >
            {val => <div>under contruction ...</div>}
        </StateFragment>
    </AdminLayout>
}

export default Persebaran;