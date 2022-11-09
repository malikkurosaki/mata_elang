import { useHookstate } from '@hookstate/core';
import io, { Socket } from 'Socket.IO-client'
import { scoreState, testSocketState } from './hstate';
import xstate from './xstate';

class SocketClient {
    static socket;

    static handler() {

        fetch('/api/socket').finally(() => {
            const socket = io()

            socket.on('connect', () => {
                console.log('connect')
                // socket.emit('hello')
            })

            // socket.on("apa", data => {
            //     xstate.nama.set(x => x = data)
            //     console.log(data)
            // })

            socket.on('update_dashboard', data => {
                fetch('/api/dashboard/dashboard-score').then(val => val.json()).then(val => scoreState.set(val))
                console.log("update dashboard score")
            })

            var hitung = 0;
            socket.on('test-socket', data => {
                hitung ++;
                console.log("socket client: test socket")
                testSocketState.set("ini test dari baru lagi " + hitung)
            })


            socket.on('disconnect', () => {
                console.log('disconnect')
            })
        }).catch(e  => {
            console.log("socket error")
        })
    }
}

export default SocketClient;