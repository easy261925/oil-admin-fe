import request from '@/utils/axios';

// 所有的交易记录
export async function queryTRefundService(payload: any) {
  return request(`/server/api/tRefund/queryTRefund`, {
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