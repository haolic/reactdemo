import { useCallback, useEffect, useRef } from 'react';
import styles from './index.module.less';

interface LayoutItemProps {
  index: number;
}

const LayoutItem = (props: LayoutItemProps) => {
  const { index } = props;
  const wrapRef = useRef<HTMLDivElement>(null);

  const innerRef = useRef<HTMLDivElement>(null);

  const resize = useCallback(() => {
    window.requestAnimationFrame(() => {
      const { width, height: wrapHeight } =
        wrapRef.current?.getBoundingClientRect() || {};
      const { height } = innerRef.current?.getBoundingClientRect() || {};

      const left = wrapRef.current?.offsetLeft || 0;
      const top = wrapRef.current?.offsetTop || 0;

      innerRef.current!.style.left = `${left}px`;
      innerRef.current!.style.top = `${top}px`;
      innerRef.current!.style.width = `${width}px`;
      innerRef.current!.style.height = `${wrapHeight || height}px`;
    });
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className={styles.item} ref={wrapRef}>
      <div className={styles.innerScaffold}></div>
      <div className={styles.inner} ref={innerRef}>
        内容{index + 1}
      </div>
    </div>
  );
};

export default LayoutItem;
