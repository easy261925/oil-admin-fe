import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import React from 'react';
import { queryOrdersService } from './service';

const Refund = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '商户订单号',
      dataIndex: 'outTradeNo',
      ellipsis: true,
      copyable: true
    },
    {
      title: '订单号',
      dataIndex: 'orderId',
      ellipsis: true,
      copyable: true
    },
    {
      title: '设备信息',
      dataIndex: 'deviceImei',
      ellipsis: true,
      copyable: true
    },
    {
      title: '通知时间',
      dataIndex: 'notifyTime'
    },
    {
      title: '付款金额',
      dataIndex: 'preAmount'
    },
    {
      title: '实际加注金额',
      dataIndex: 'spent_amount'
    },
    {
      title: '已加注升数或公斤数',
      dataIndex: 'fillAmount'
    },
    {
      title: '实际加注单价',
      dataIndex: 'fillPrice'
    },
    {
      title: '开始时间',
      dataIndex: 'fillTime'
    },
    {
      title: '加注过程耗时（秒）',
      dataIndex: 'timeConsum'
    },
    {
      title: 'GPS经度',
      dataIndex: 'longitude'
    },
    {
      title: 'GPS纬度',
      dataIndex: 'latitude'
    },
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      request={queryOrdersService}
      rowKey='id'
      search={false}
    />
  </PageContainer>
}

export default Refund
