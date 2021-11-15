import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import React from 'react';
import { queryTInvoicePdfService } from './service';

const Invoice = () => {
  const columns: ProColumns<any>[] = [
    {
      title: '发票代码',
      dataIndex: 'fpdm'
    },
    {
      title: '发票号码',
      dataIndex: 'fphm'
    },
    {
      title: '发票种类',
      dataIndex: 'fpzl',
      valueEnum: {
        c: '增值税普票',
        s: '增值税专票',
        t: '增值税电普票',
      }
    },
    {
      title: '机器编号',
      dataIndex: 'jqbh'
    },
    {
      title: '开票日期',
      dataIndex: 'kprq'
    },
    {
      title: '销售方纳税人识别号',
      dataIndex: 'xsf_nsrsbh'
    },
    {
      title: '销售方名称',
      dataIndex: 'xsf_mc'
    },
    {
      title: '销售方地址电话',
      dataIndex: 'xsf_dzdh'
    },
    {
      title: '销售方银行账号',
      dataIndex: 'xsf_yhzh'
    },
    {
      title: '购买方纳税人识别号',
      dataIndex: 'gmf_nsrsbh'
    },
    {
      title: '购买方名称',
      dataIndex: 'gmf_mc'
    },
    {
      title: '购买方地址电话',
      dataIndex: 'gmf_dzdh'
    },
    {
      title: '购买方银行账号',
      dataIndex: 'gmf_yhzh'
    },
    {
      title: '开票人',
      dataIndex: 'kpr'
    },
    {
      title: '收款人',
      dataIndex: 'skr'
    },
    {
      title: '复核人',
      dataIndex: 'fhr'
    },
    {
      title: '价税合计',
      dataIndex: 'jshj'
    },
    {
      title: '合计金额',
      dataIndex: 'hjje'
    },
    {
      title: '合计税额',
      dataIndex: 'hjse'
    },
    {
      title: '备注',
      dataIndex: 'bz'
    },
    {
      title: '发票状态',
      dataIndex: 'fpzt',
      valueEnum: {
        0: '正数发票',
        1: '异常'
      }
    },
    {
      title: '发票明细数据',
      dataIndex: 'fpmx'
    },
    {
      title: '商品名称',
      dataIndex: 'spmc'
    },
    {
      title: '规格型号',
      dataIndex: 'ggxh'
    },
    {
      title: '计量单位',
      dataIndex: 'jldw'
    },
    {
      title: '商品数量',
      dataIndex: 'spsl'
    },
    {
      title: '商品单价',
      dataIndex: 'spdj'
    },
    {
      title: '金额',
      dataIndex: 'je'
    },
    {
      title: '税率',
      dataIndex: 'slv'
    },
    {
      title: '税额',
      dataIndex: 'se'
    },
    {
      title: '文件地址',
      dataIndex: 'pdfurl',
      ellipsis: true,
      copyable: true
    },
  ]

  return <PageContainer>
    <ProTable
      columns={columns}
      rowKey='id'
      search={false}
      request={queryTInvoicePdfService}
      scroll={{ x: 1920 }}
    />
  </PageContainer>
}

export default Invoice
