import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import React from 'react';
import { getEquipmentService } from './service';

const Equipment = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '设备ID',
      dataIndex: 'id'
    },
    {
      title: '设备编号',
      dataIndex: 'deviceInfo'
    },
    {
      title: '设备地址',
      dataIndex: 'deviceAdd'
    },
    {
      title: '设备单价',
      dataIndex: 'deviceFree'
    },
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      rowKey='id'
      request={getEquipmentService}
      search={false}
    />
  </PageContainer>
}

export default Equipment
