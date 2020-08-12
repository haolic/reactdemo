import React from 'react';

import {
  registerFieldPlugins,
  registerRenderPlugins,
  registerActionPlugins,
  registerFilterPlugins,
  Icon,
  CreateForm,
} from 'sula';
import 'antd/dist/antd.css'; // 引入antd主题
import { UserOutlined } from '@ant-design/icons';
// 注册插件
registerFieldPlugins();
registerRenderPlugins();
registerActionPlugins();
registerFilterPlugins();
// 注册icon
Icon.iconRegister({
  user: UserOutlined,
});

const Sula = () => {
  return (
    <CreateForm
      fields={[
        {
          field: {
            type: 'input',
            props: {
              placeholder: 'Please input',
            },
          },
          name: 'input',
          label: 'Input',
        },
        {
          field: 'select',
          name: 'select',
          label: 'Select',
          initialSource: [
            {
              text: '苹果',
              value: 'apple',
            },
          ],
        },
      ]}
      submit={{
        url: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
        method: 'POST',
      }}
    />
  );
};

Sula.label = '苏拉';

export default Sula;
