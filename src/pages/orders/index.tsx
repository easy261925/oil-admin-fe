import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import React from 'react';

const Refund = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '标题',
      dataIndex: 'test'
    }
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
    />
  </PageContainer>
}

export default Refund
