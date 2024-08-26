import React, { HTMLInputTypeAttribute } from 'react';
import styles from './index.module.less';

interface IProps {
  label: string;
  type: HTMLInputTypeAttribute;
  options?: Array<{ value: string; label: string }>;
  name: string;
  placeholder: string;
  defaultValue?: string | number;
  suffix?: React.ReactNode;
  disabled?: boolean;
}

const FormItem = (props: IProps) => {
  const { label, type, options, name, placeholder, defaultValue, disabled } =
    props;

  const renderType = () => {
    switch (type) {
      case 'select':
        return (
          <select
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
          >
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        );
      default:
        return (
          <input
            type={type || 'text'}
            defaultValue={defaultValue}
            name={name}
            placeholder={placeholder || '请输入'}
            disabled={disabled}
            step={type === 'number' ? 10 : undefined}
          />
        );
    }
  };
  return (
    <div className={styles.formItem}>
      <label className={styles.label}>{label}</label>
      {renderType()}
      {props.suffix && <span>{props.suffix}</span>}
    </div>
  );
};

export default FormItem;
