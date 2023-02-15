import React, { useState, useTransition } from 'react';

interface IProps {
  queryStr: string;
}

const Comp: React.FC<IProps> = (props) => {
  const { queryStr } = props;
  for (let i = 0; i < 99999; i += 1) {}
  return <div>{queryStr}</div>;
};

const ReactUseTransition = () => {
  const [inputStr, setInputStr] = useState('');
  const [queryStr, setQueryStr] = useState('');
  const [isPending, startTransition] = useTransition();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputStr(e.target.value);

    startTransition(() => {
      setQueryStr(e.target.value);
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <input value={inputStr} onChange={onChange}></input>
      {/* {[...new Array(5000)].map((el, idx) => {
        return <Comp key={idx} queryStr={inputStr} />;
      })} */}
      {isPending ? (
        <div>loading...</div>
      ) : (
        [...new Array(5000)].map((el, idx) => {
          return <Comp key={idx} queryStr={queryStr} />;
        })
      )}
    </div>
  );
};

ReactUseTransition.title = 'React18的useTransition';

export default ReactUseTransition;
