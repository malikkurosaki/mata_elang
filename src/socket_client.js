import { useHookstate } from '@hookstate/core';
import io, { Socket } from 'Socket.IO-client'
import xstate from './xstate';

class SocketClient {
    static socket;

    static handler() {
        fetch('/api/socket').finally(() => {
            const socket = io()

            socket.on('connect', () => {
                console.log('connect')
                socket.emit('hello')
            })

            socket.on("apa", data => {
                xstate.nama.set(x => x = data)
                console.log(data)
            })

            socket.on('disconnect', () => {
                console.log('disconnect')
            })
        })
    }
}

export default SocketClient;