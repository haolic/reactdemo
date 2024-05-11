import { useEffect } from 'react';
import Quill, { QuillOptions } from 'quill';
import 'quill/dist/quill.snow.css';

const QuillRichText = () => {
  useEffect(() => {
    const options: QuillOptions = {
      modules: {
        toolbar: true,
      },
      placeholder: '请输入',
      theme: 'snow',
    };
    const dom = document.getElementById('quill-dom');
    new Quill(dom, options);
  }, []);
  return (
    <div>
      <h3>quill富文本编辑器</h3>
      <div
        id="quill-dom"
        style={{
          minHeight: 300,
        }}
      ></div>
    </div>
  );
};

export default QuillRichText;
