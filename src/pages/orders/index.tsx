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
      copyable: true,
      search: false
    },
    {
      title: '订单号',
      dataIndex: 'orderId',
      ellipsis: true,
      copyable: true,
      search: false
    },
    {
      title: '设备信息',
      dataIndex: 'deviceImei',
      ellipsis: true,
      copyable: true
    },
    {
      title: '通知时间',
      dataIndex: 'notifyTime',
      search: false
    },
    {
      title: '付款金额',
      dataIndex: 'preAmount'
    },
    {
      title: '实际加注金额',
      dataIndex: 'spent_amount',
      search: false
    },
    {
      title: '已加注升数或公斤数',
      dataIndex: 'fillAmount',
      search: false
    },
    {
      title: '实际加注单价',
      search: false,
      dataIndex: 'fillPrice'
    },
    {
      title: '开始时间',
      dataIndex: 'notifyTime',
      valueType: 'dateTime',
    },
    {
      title: '开始时间',
      dataIndex: 'mindate',
      valueType: 'dateTime',
      hideInTable: true,
    },
    {
      title: '结束时间',
      dataIndex: 'maxdate',
      valueType: 'dateTime',
      hideInTable: true,
    },
    {
      title: '加注过程耗时（秒）',
      search: false,
      dataIndex: 'timeConsum'
    },
    {
      title: 'GPS经度',
      search: false,
      dataIndex: 'longitude'
    },
    {
      title: 'GPS纬度',
      search: false,
      dataIndex: 'latitude'
    },
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      request={queryOrdersService}
      rowKey='id'
    />
  </PageContainer>
}

export default Refund
