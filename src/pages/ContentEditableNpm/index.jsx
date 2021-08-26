import React from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import styles from './index.less';

const expreg = /\(\(/g;
const htmlReg = /<[^>]+>/g;

function getTxt1CursorPosition(oTxt1){
  console.dir(oTxt1)
}

class ContentEditableNpm extends React.Component {
  constructor() {
    super();
    this.contentEditable = React.createRef();
    this.state = {
      html: '',
    };
  }

  sanitizeConf = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'h1', 'span'],
    allowedAttributes: { a: ['href'], span: ['style'] },
  };
  handleChange = (evt) => {
    let str = evt.target.value;
    str = str.replace(htmlReg, '');
    str = str.replace(expreg, '<span style="color: red" contentEditable="false">((</span>');
    console.log(this.contentEditable);
    const cursorIndex = getTxt1CursorPosition(this.contentEditable.current);
    console.log(cursorIndex);
    this.setState({
      html: sanitizeHtml(str, this.sanitizeConf),
    });
    // this.setState({ html: evt.target.value });
  };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  render = () => {
    return (
      <div>
        <ContentEditable
          innerRef={this.contentEditable}
          className={styles.contentWrap}
          tagName="div"
          html={this.state.html} // innerHTML of the editable div
          onChange={this.handleChange} // handle innerHTML change
        />
      </div>
    );
  };
}

ContentEditableNpm.label = '内容可编辑npm';

export default ContentEditableNpm;
