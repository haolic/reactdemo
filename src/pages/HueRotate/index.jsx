import React, { useEffect } from 'react';
import styles from './index.less';
import hljs from 'highlight.js/lib/core';
import less from 'highlight.js/lib/languages/less';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('less', less);

const HueRotate = () => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, []);

  const highlightCode = `  .btn {
    width: 200px;
    height: 50px;
    background: #8baeff;
    filter: hue-rotate(140deg);
    animation: colorTrans 5s linear infinite;
    border-radius: 4px;
    padding: 20px;
  }
  .innerBtn {
    background: rgb(0, 89, 255);
    height: 100%;
    width: 50%;
  }
  
  @keyframes colorTrans {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(180deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;
  return (
    <div className={styles.wrap}>
      <div className={styles.btn}>
        <div className={styles.innerBtn}></div>
      </div>
      <pre className={styles.pre}>
        <code className="less">{highlightCode}</code>
      </pre>
    </div>
  );
};

HueRotate.label = (
  <div className={styles.colorRotate} style={{ background: 'rgb(125 90 37)' }}>
    色调旋转
  </div>
);

export default HueRotate;
