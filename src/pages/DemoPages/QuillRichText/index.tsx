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
      <div>quill富文本编辑器</div>
      <div id="quill-dom"></div>
    </div>
  );
};

export default QuillRichText;
