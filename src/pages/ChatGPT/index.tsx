import React, { useState } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';

const ChatGPT = () => {
  const [text, setText] = useState<string>();

  const onClick = async () => {
    const res = axios.post(
      'http://ec2-52-91-13-155.compute-1.amazonaws.com:3000/api/chat',
      {
        input: text,
      },
    );
    console.log(res);
  };

  return (
    <div>
      <Input onChange={(e) => setText(e.target.value)} />
      <Button onClick={onClick}>发送</Button>
    </div>
  );
};

ChatGPT.title = 'GhatGPT';

export default ChatGPT;
