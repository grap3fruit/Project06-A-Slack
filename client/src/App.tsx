import React from 'react';
import { Header } from '@components/index';
import io from 'socket.io-client';

const domain = 'http://localhost:3000';

const App = () => {
  const namespace1 = io(`${domain}/namespace1`, {
    transports: ['websocket', 'polling'],
  });
  // namespace 접속

  const namespace2 = io(`${domain}/namespace2`, {
    transports: ['websocket', 'polling'],
  });
  // namespace 접속

  const handleSend1 = () => {
    console.log('ch1 clicked');
    namespace1.emit('msg', 'value');
    namespace1.emit('room1', 'room1 value');
    // namespace1.on('room1', (data: any) => console.log(data));
  };
  // namespace1에 'msg' 이벤트에다가 'value'라는 값을 전달

  const handleSend2 = () => {
    console.log('ch2 clicked');
    namespace2.emit('msg', 'value');
  };

  return (
    <div>
      <button type="button" onClick={handleSend1}>
        채널 1 전송
      </button>
      <button type="button" onClick={handleSend2}>
        채널 2 전송
      </button>
      <Header />
    </div>
  );
};

export default App;
