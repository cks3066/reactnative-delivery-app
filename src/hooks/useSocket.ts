import {useCallback} from 'react';
import {io, Socket} from 'socket.io-client';
import Config from 'react-native-config';
import {Platform} from 'react-native';

let socket: Socket | undefined;
const useSocket = (): [Socket | undefined, () => void] => {
  let URL = null;
  if (Platform.OS === 'android') {
    URL = Config.API_URL_ANDROID;
  } else {
    URL = Config.API_URL_IOS;
  }
  const disconnect = useCallback(() => {
    if (socket) {
      socket.disconnect();
      socket = undefined;
    }
  }, []);
  if (!socket) {
    socket = io(`${URL}`, {
      transports: ['websocket'],
    });
  }
  return [socket, disconnect];
};

export default useSocket;
