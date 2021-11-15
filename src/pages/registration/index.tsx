import { queryShanghuService } from '@/services/common';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import React, { useRef } from 'react';

const Registration = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<any>[] = [

    {
      title: '商户编号',
      dataIndex: 'bianhao'
    },
    {
      title: '商户名',
      dataIndex: 'name'
    },
    {
      title: '店主姓名',
      dataIndex: 'realname'
    },
    {
      title: '手机',
      dataIndex: 'phone'
    },
    {
      title: '当前积分',
      dataIndex: 'jifen'
    },
    {
      title: '办公地址',
      dataIndex: 'bangongdizhi'
    },
    {
      title: '开户银行',
      dataIndex: 'yinhangming',
    },
    {
      title: '银行卡号',
      dataIndex: 'yinhangkaList',
      render: (dom, entity) => {
        return <div>
          {entity.yinhangkaList.map((item: any) => <div key={item.id}>{item.yinhangming}/{item.yinhangka}</div>)}
        </div>
      }
    },
    {
      title: '申请时间',
      dataIndex: 'createtime',
    }
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      request={params => queryShanghuService(params)}
      rowKey='id'
      search={false}
      actionRef={actionRef}
    />
  </PageContainer>
}

export default Registration
