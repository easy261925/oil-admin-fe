import request from '@/utils/axios';

// 查询设备
export async function queryTInvoicePdfService(payload: any) {
  return request(`/server/api/invoice/queryTInvoicePdf`, {
    method: 'POST',
    data: {
      pageno: payload.current,
      pagesize: payload.pageSize,
    },
  }).then(res => {
    return {
      success: res.status === 666,
      data: res.data,
      total: res.total
    }
  });
}