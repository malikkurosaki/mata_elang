import { useHookstate } from "@hookstate/core"
import xstate from "../../xstate"

export default function IniPercobaan(){
    const state = useHookstate(xstate.coba.state)
    return <div>
        {state.value}
    </div>
}