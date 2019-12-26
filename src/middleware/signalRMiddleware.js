import { USER_LOGIN, SEND_MESSAGE, RECEIVE_MESSAGE } from "../actions/types";
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

let _connected = false;
let _hubConnection = "";

export const signalRMiddleware = (store) => {
    return (next) => (action) => {
        if (action.signalR) {
            switch (action.type) {
                case USER_LOGIN:
                    startConnection(action.payload, store);
                    break;
                case SEND_MESSAGE:
                    //adaptMessageForServer(action.payload,store)
                    _hubConnection.invoke('SendPrivateMessage', adaptMessageForServer(action.payload[0], store)).catch(err => {
                        console.log(err)
                    })
                    break;
                default:
                    {
                        break;
                        const myCurrentState = store.getState().objectWithinState;
                        //  _hub.server.methodOnTheServer2(action.type, myCurrentState);
                    }
            }
        }
        return next(action);
    }
}




const startConnection = (token, store) => {
    if (!_connected) {
        _hubConnection = new HubConnectionBuilder()
            .withUrl("http://877baef7.ngrok.io/chat?access_token=" + token)
            .build();
        console.log("in start connection");
        registerOnServerEvents(_hubConnection, store);

        _hubConnection
            .start()
            .then(() => {
                console.log('Hub connection started');

                _connected = true;
            })
            .catch(err => {
                console.log('Error while establishing connection, retrying...');
                setTimeout(() => _hubConnection.startConnection(), 5000);
            });
    }

}

const registerOnServerEvents = (hubConnection, store) => {
    hubConnection.on('SendToAll', (data) => {
        console.log(data);
    })
    hubConnection.on('SendConnections', (data) => {
        console.log(data);
    })
    hubConnection.on('ReceiveMessage', (data) => {
        console.log(data);
    })

    hubConnection.on('SendOnlineConnections', (data) => {
        console.log(data);
    })
}
