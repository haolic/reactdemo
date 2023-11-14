import { useState } from 'react';
import axios from 'axios';

const ChatGPT = () => {
  const [text, setText] = useState<string>();
  const [gptRes] = useState('');

  // app.all('*',function (req, res, next) {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Headers', '*');
  //   res.header('Content-Type', 'application/json;charset=utf-8');
  //   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  //   next();
  // });

  const onClick = async () => {
    const res = await axios.get('http://x.x.x.x:3000/api/chatstring', {
      input: text,
    } as any);
    console.log(res);
    // setGptRes(res.data)
  };

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={onClick}>发送</button>
      <div
        dangerouslySetInnerHTML={{
          __html: gptRes,
        }}
      ></div>
    </div>
  );
};

export default ChatGPT;
