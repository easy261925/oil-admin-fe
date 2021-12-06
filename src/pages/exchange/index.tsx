import { queryShangpinJiaoyiService } from '@/services/common';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import React from 'react';

const Exchange = () => {
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
      title: '消费人',
      dataIndex: 'xiaofeizhe',
      search: false,
    },
    {
      title: '联系电话',
      search: false,
      dataIndex: 'xphone'
    },
    {
      title: '收货地址',
      search: false,
      dataIndex: 'shouhuodizhi'
    },
    {
      title: '兑换时间',
      search: false,
      dataIndex: 'jiaoyitime'
    },
    {
      title: '发货时间',
      search: false,
      dataIndex: 'fahuotime'
    },
    {
      title: '发货状态',
      dataIndex: 'fahuo',
      valueEnum: {
        0: '未发货',
        1: '已发货'
      }
    },
    {
      title: '开始兑换时间',
      dataIndex: 'mindate',
      valueType: 'dateTime',
      hideInTable: true,
    },
    {
      title: '结束兑换时间',
      dataIndex: 'maxdate',
      valueType: 'dateTime',
      hideInTable: true,
    }
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      request={(params) => queryShangpinJiaoyiService(params)}
      rowKey='id'
      search={{
        labelWidth: 140
      }}
    />
  </PageContainer>
}

export default Exchange
