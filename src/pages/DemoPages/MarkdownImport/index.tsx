import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './index.module.less';

const MarkdownImport = () => {
  const [str, setStr] = useState<string>('');

  const fileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(); // 创建FileReader对象
    reader.readAsText(file, 'UTF-8'); // 以文本形式读取文件内容并指定编码格式

    reader.onload = () => {
      setStr(reader.result as string);
    };
  };

  const onPrint = () => {
    const prtContent = document.getElementById('print-html') as HTMLElement; // 获取要打印的元素
    const WinPrint = window.open(
      '',
      '',
      'left=0,top=0,width=768,height=576'
    ) as Window; // 打开新窗口

    WinPrint.document.write(prtContent.innerHTML); // 写入要打印的元素
    WinPrint.document.close(); // 关闭窗口
    WinPrint.focus();
    WinPrint.print(); // 执行打印操作
    WinPrint.close(); // 关闭新窗口
  };

  return (
    <div className={styles.wrap}>
      {str && <button onClick={onPrint}>打印</button>}
      {str ? (
        <div id="print-html">
          <ReactMarkdown>{str}</ReactMarkdown>
        </div>
      ) : (
        <input type="file" accept=".md" onChange={fileChange} />
      )}
    </div>
  );
};

MarkdownImport.title = 'md导入（print转pdf）';
export default MarkdownImport;
