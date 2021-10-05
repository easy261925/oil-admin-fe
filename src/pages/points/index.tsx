import { queryXiaofeizheService } from '@/services/common';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import React from 'react';

const Points = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '姓名',
      dataIndex: 'name'
    },
    {
      title: '电话',
      dataIndex: 'phone'
    },
    {
      title: '积分',
      dataIndex: 'jifen'
    },
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      request={(params) => queryXiaofeizheService(params)}
      rowKey='id'
      search={false}
    />
  </PageContainer>
}

export default Points
