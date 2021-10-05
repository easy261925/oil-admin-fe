import { dealShiwuJiaoyiService, queryShiwuJiaoyiService } from '@/services/common';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { message, Popconfirm } from 'antd';
import React, { useRef } from 'react';

const PostMessage = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<any>[] = [
    {
      title: '商品名称',
      dataIndex: 'shangpinname'
    },
    {
      title: '商品分类',
      dataIndex: 'shangpinfenlei'
    },
    {
      title: '收货人',
      dataIndex: 'xiaofeizhe'
    },
    {
      title: '收货地址',
      dataIndex: 'shouhuodizhi'
    },
    {
      title: '兑换时间',
      dataIndex: 'jiaoyitime'
    },
    {
      title: '发货时间',
      dataIndex: 'fahuotime'
    },
    {
      title: '操作',
      render: (dom, entity) => entity.fahuo !== 1 && <Popconfirm title='确认处理?' onConfirm={() => {
        dealShiwuJiaoyiService(entity).then(res => {
          console.log('res__', res)
          if (res.success) {
            actionRef.current?.reload()
            message.success('处理成功')
          }
        })
      }}>
        <a>处理</a>
      </Popconfirm>
    }
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      request={(params) => queryShiwuJiaoyiService(params)}
      rowKey='id'
      actionRef={actionRef}
    />
  </PageContainer>
}

export default PostMessage
