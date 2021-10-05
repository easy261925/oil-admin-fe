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
      dataIndex: 'xiaofeizhe'
    },
    {
      title: '联系电话',
      dataIndex: 'xphone'
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
      title: '发货状态',
      dataIndex: 'fahuo',
      valueEnum: {
        0: '未发货',
        1: '已发货'
      }
    }
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      request={(params) => queryShangpinJiaoyiService(params)}
      rowKey='id'
      search={false}
    />
  </PageContainer>
}

export default Exchange
