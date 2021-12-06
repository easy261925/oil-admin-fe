import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import React from 'react';
import { queryTRefundService } from './service';

const Orders = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '商户订单号',
      dataIndex: 'outTradeNo',
      ellipsis: true,
      copyable: true
    },
    {
      title: '退款微信ID',
      dataIndex: 'unionid',
      ellipsis: true,
      copyable: true
    },
    {
      title: '公众账号ID',
      dataIndex: 'appid'
    },
    {
      title: '商户号',
      dataIndex: 'mchId',
      ellipsis: true,
      copyable: true
    },
    {
      title: '商户退款单号',
      dataIndex: 'outRefundNo',
      ellipsis: true,
      copyable: true
    },
    {
      title: '订单金额',
      dataIndex: 'totalFee'
    },
    {
      title: '退款金额',
      dataIndex: 'refundFee'
    },
    {
      title: '微信退款单号',
      dataIndex: 'refundId',
      ellipsis: true,
      copyable: true
    },
    {
      title: '备注',
      dataIndex: 'memo'
    },
    {
      title: '微信支付订单号',
      dataIndex: 'transactionId',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '现金支付金额',
      dataIndex: 'cashFee'
    },
    {
      title: '退款时间',
      dataIndex: 'refundtime'
    },
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      rowKey='id'
      request={queryTRefundService}
      search={{
        labelWidth: 140
      }}
    />
  </PageContainer>
}

export default Orders
