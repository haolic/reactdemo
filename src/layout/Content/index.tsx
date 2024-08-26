import styles from './index.module.less';

const Content = (props) => {
  return <div className={styles.wrap}>{props.children}</div>;
};

export default Content;
