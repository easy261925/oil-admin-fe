import { dealHuanxianService, offshelvesShangpinService, onsaleShangpinService, onshelvesShangpinService, queryHuanxianService, queryShangpinService } from '@/services/common';
import { UploadOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Form, Input, InputNumber, message, Modal, Popconfirm, Select, Space, Upload } from 'antd';
import React, { useRef, useState } from 'react';

const Goods = () => {
  const actionRef = useRef<ActionType>();
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false)
  const columns: ProColumns<any>[] = [

    {
      title: '商品名称',
      dataIndex: 'name'
    },
    {
      title: '图片',
      dataIndex: 'imgurl',
      render: (dom: any) => <img src={dom} style={{ height: 40, width: 40 }} />
    },
    {
      title: '分类',
      dataIndex: 'fenlei'
    },
    {
      title: '积分',
      dataIndex: 'jifen'
    },
    {
      title: '价值',
      dataIndex: 'jiazhi'
    },
    {
      title: '状态',
      dataIndex: 'zhuangtai',
      valueEnum: {
        0: '未上架',
        1: '已上架'
      }
    },

    {
      title: '操作',
      render: (dom, entity) =>
        <Space>
          {entity.zhuangtai === 0 && <Popconfirm
            title='确认上架?'
            onConfirm={() => {
              onshelvesShangpinService(entity).then(res => {
                if (res.success) {
                  actionRef.current?.reload()
                }
              })
            }}>
            <a>上架</a>
          </Popconfirm>}
          {entity.zhuangtai === 1 && <Popconfirm
            title='确认下架?'
            onConfirm={() => {
              offshelvesShangpinService(entity).then(res => {
                console.log('res', res)
                if (res.success) {
                  actionRef.current?.reload()
                }
              })
            }}>
            <a>下架</a>
          </Popconfirm>}
        </Space>
    }
  ]

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onOk = () => {
    form.validateFields().then((values) => {
      console.log('values', values)
      const { files = [] } = values
      onsaleShangpinService({
        ...values,
        files: files.map((item: any) => item.originFileObj),
      }).then(res => {
        console.log('res', res)
        if (res.status === 666) {
          message.success('上架成功')
          setVisible(false)
          form.resetFields()
          actionRef.current?.reload()
        } else {
          message.error('上架失败')
        }
      })
    })
  }

  return <PageContainer>
    <ProTable
      columns={columns}
      request={params => queryShangpinService(params)}
      rowKey='id'
      search={false}
      actionRef={actionRef}
      toolBarRender={() => [
        <Button type="primary"
          onClick={() => {
            setVisible(true)
          }}>上架商品</Button>
      ]}
    />
    <Modal
      title='上架商品'
      visible={visible}
      onCancel={() => {
        form.resetFields()
        setVisible(false)
      }}
      onOk={onOk}
    >
      <Form form={form}>
        <Form.Item
          label='商品名称'
          name='name'
          rules={[{
            required: true, message: '请输入商品名称'
          }]}>
          <Input placeholder='请输入商品名称' />
        </Form.Item>
        <Form.Item
          label='商品说明'
          name='shuoming'
        >
          <Input placeholder='请输入商品说明' />
        </Form.Item>
        <Form.Item
          label='商品分类'
          name='fenlei'
          rules={[{
            required: true, message: '请选择商品分类'
          }]}>
          <Select>
            <Select.Option value='实物'>
              实物
            </Select.Option>
            <Select.Option value='优惠券'>
              优惠券
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label='积分'
          name='jifen'
          rules={[{
            required: true, message: '请输入商品积分'
          }]}
        >
          <InputNumber placeholder='请输入商品积分' style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label='价值'
          name='jiazhi'
        >
          <InputNumber placeholder='请输入商品价值' style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="files"
          label="上传图片"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{
            required: true, message: '请上传商品图片'
          }]}
        >
          <Upload action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>上传图片</Button>
          </Upload>
        </Form.Item>
      </Form>

    </Modal>
  </PageContainer>
}

export default Goods
