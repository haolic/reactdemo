import { useState } from 'react';
import { Button, Input } from 'antd';
import axios from 'axios';

const ChatGPT = () => {
  const [text, setText] = useState<string>();
  const [gptRes, setGptRes] = useState('');

  // app.all('*',function (req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Headers', '*');
  //   res.header('Content-Type', 'application/json;charset=utf-8');
  //   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  //   next();
  // });

  const onClick = async () => {
    const res = await axios.get('http://52.91.13.155:3000/api/chat', {
      input: text,
    } as any);
    console.log(res);
    // setGptRes(res.data)
  };

  return (
    <div>
      <Input onChange={(e) => setText(e.target.value)} />
      <Button onClick={onClick}>发送</Button>
      <div
        dangerouslySetInnerHTML={{
          __html: gptRes,
        }}
      ></div>
    </div>
  );
};

ChatGPT.title = 'GhatGPT';

export default ChatGPT;
