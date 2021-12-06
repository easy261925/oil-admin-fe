import { dealHuanxianService, queryHuanxianService } from '@/services/common';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { message, Popconfirm } from 'antd';
import React, { useRef } from 'react';

const PointWriteOff = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<any>[] = [

    {
      title: '申请时间',
      dataIndex: 'shenqingtime',
      search: false,
    },
    {
      title: '商户号',
      dataIndex: 'shanghuid'
    },
    {
      title: '商户',
      dataIndex: 'shanghu'
    },
    {
      title: '商户手机',
      dataIndex: 'sphone'
    },
    {
      title: '开户银行',
      search: false,
      dataIndex: 'yinhangming'
    },
    {
      title: '银行卡号',
      search: false,
      dataIndex: 'yinhangka'
    },
    {
      title: '积分',
      search: false,
      dataIndex: 'jifen'
    },
    {
      title: '金额',
      search: false,
      dataIndex: 'jine'
    },
    {
      title: '核销状态',
      dataIndex: 'huanxian',
      valueEnum: {
        0: '未核销',
        1: '已核销'
      }
    },
    {
      title: '核销时间',
      search: false,
      dataIndex: 'huanxiantime'
    },
    {
      title: '操作',
      search: false,
      render: (dom, entity) => entity.huanxian !== 1 && <Popconfirm title='确认核销?' onConfirm={() => {
        dealHuanxianService(entity).then(res => {
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
      request={params => queryHuanxianService(params)}
      rowKey='id'
      actionRef={actionRef}
    />
  </PageContainer>
}

export default PointWriteOff
