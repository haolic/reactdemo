import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Button,
  Form,
  message,
  Input,
  Modal,
  Table,
  Space,
  Popconfirm,
  InputRef,
} from 'antd';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import styles from './index.module.less';

const IndexedDB = () => {
  const db = useRef(null);

  const searchInput = useRef<InputRef>();

  const [form] = Form.useForm();

  const [addModalShow, setAddModalShow] = useState(false);
  const [currentEditRecord, setCurrentEditRecord] = useState(undefined);
  const [list, setList] = useState([]);

  const initDB = useCallback(() => {
    const request = window.indexedDB.open('todo');
    request.onerror = function (event: any) {
      console.log(event);
      message.error(event.target.error.message);
    };

    request.onsuccess = function (e: any) {
      console.log('数据库打开成功');
      message.success('数据库打开成功', e.target.result);
      db.current = e.target.result;
      getData();
    };

    request.onupgradeneeded = function (e: any) {
      console.log('onupgradeneeded', e.target.result);
      db.current = e.target.result;

      // createObjectStore只能在onupgradeneeded中调用
      const store = db.current.createObjectStore('list', {
        keyPath: 'todoId', // 指定主键，如果不指定主键，删除数据和更新数据就比较麻烦。
      });

      store.createIndex('name', 'name', { unique: false });
      store.createIndex('todoId', 'todoId', { unique: true });
    };
  }, []);

  useEffect(() => {
    initDB();
  }, [initDB]);

  const getData = (keyWord?: string) => {
    const objectStore = db.current.transaction('list').objectStore('list');
    const index = objectStore.index('name');
    const res = [];

    const request = index.openCursor();

    request.onsuccess = function (event) {
      const cursor = event.target.result;

      if (cursor) {
        if (keyWord) {
          if (cursor.key.includes(keyWord)) {
            res.push(cursor.value);
          }
        } else {
          res.push(cursor.value);
        }
        cursor.continue();
      } else {
        setList(res);
        console.log('没有更多数据了。');
      }
    };
  };

  const onOk = () => {
    form.submit();
  };

  const onSubmit = (val) => {
    const store = db.current
      .transaction(['list'], 'readwrite')
      .objectStore('list');

    let request;
    if (currentEditRecord) {
      request = store.put({
        ...currentEditRecord,
        ...val,
        update: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      });
    } else {
      request = store.add({
        ...val,
        todoId: val.todoId || uuid(),
        create: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        update: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      });
    }

    request.onsuccess = function (event) {
      console.log('数据写入成功');
      message.success('数据写入成功');
      getData();
      setAddModalShow(false);
      form.resetFields();
      setCurrentEditRecord(undefined);
    };

    request.onerror = function (event) {
      console.log('数据写入失败', event);
      message.error('数据写入失败' + event.target.error.message);
    };
  };

  const handleUpdate = (record) => {
    form.setFieldsValue(record);
    setAddModalShow(true);
    setCurrentEditRecord(record);
  };

  const onDelete = (record) => {
    /**
     * 根据主键删除记录，
     * 如果没有指定主键，需要通过游标来遍历数据从而删除记录。
     * 优先使用索引游标，性能相比对象仓库游标更高效。
     * 但仓库游标更简单灵活，无需创建索引。
     */
    const request = db.current
      .transaction(['list'], 'readwrite')
      .objectStore('list')
      .delete(record.todoId); // 根据主键删除记录

    request.onsuccess = function (event) {
      console.log('数据删除成功');
      message.success('数据删除成功');
      getData();
    };

    request.onerror = function (event) {
      console.log('数据删除失败');
      message.error('数据删除失败' + event.target.error.message);
    };
    // =============

    // const transaction = db.current.transaction(['list'], 'readwrite');
    // const objectStore = transaction.objectStore('list');
    // const index = objectStore.index('todoId');

    // const request = index.openCursor();
    // request.onsuccess = (event) => {
    //   const cursor = event.target.result;
    //   if (cursor) {
    //     console.log(cursor.key);
    //     // 判断满足删除条件的记录
    //     if (cursor.key === record.todoId) {
    //       const deleteRequest = cursor.delete();
    //       deleteRequest.onsuccess = () => {
    //         console.log('数据项删除成功');
    //       };
    //       deleteRequest.onerror = () => {
    //         console.log('数据项删除失败');
    //       };
    //     }
    //     cursor.continue();
    //   } else {
    //     console.log('索引遍历完成');
    //     getData();
    //   }
    // };
  };

  const onSearch = () => {
    if (searchInput.current) {
      console.log(searchInput.current.input.value);
      getData(searchInput.current.input.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>IndexedDB</h1>
      <div className={styles.wrap}>
        <div className={styles.options}>
          <Space direction="vertical">
            <Button onClick={() => setAddModalShow(true)}>新增数据</Button>
            <Space>
              <Input placeholder="关键词" ref={searchInput} />
              <Button onClick={onSearch}>查询</Button>
            </Space>
          </Space>
        </div>
        <div className={styles.result}>
          <h3>结果</h3>
          <Table
            size="small"
            columns={[
              {
                title: '名称',
                dataIndex: 'name',
              },
              {
                title: '创建时间',
                dataIndex: 'create',
              },
              {
                title: '更新时间',
                dataIndex: 'update',
              },
              {
                title: '操作',
                dataIndex: 'options',
                render: (_, record) => {
                  return (
                    <Space>
                      <a onClick={() => handleUpdate(record)}>更新</a>
                      <Popconfirm
                        title="确认删除？"
                        onConfirm={() => onDelete(record)}
                        placement="leftTop"
                      >
                        <Button type="link" danger>
                          删除
                        </Button>
                      </Popconfirm>
                    </Space>
                  );
                },
              },
            ]}
            rowKey="todoId"
            dataSource={list}
          />
        </div>
      </div>

      <Modal
        open={addModalShow}
        title={currentEditRecord ? '更新数据' : '新增数据'}
        onCancel={() => {
          setAddModalShow(false);
          setCurrentEditRecord(undefined);
          form.resetFields();
        }}
        onOk={onOk}
      >
        <Form
          onFinish={onSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          form={form}
        >
          <Form.Item
            name="name"
            label="名称"
            rules={[{ required: true, message: '请输入事件名称' }]}
          >
            <Input placeholder="请输入事件名称" />
          </Form.Item>

          <Form.Item name="todoId" label="事件id">
            <Input
              placeholder="不输入则自动生成"
              disabled={!!currentEditRecord}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

IndexedDB.label = 'IndexDB浏览器数据库';

export default IndexedDB;
