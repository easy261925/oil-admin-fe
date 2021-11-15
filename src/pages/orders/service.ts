import request from '@/utils/axios';

// 所有的交易记录
export async function queryOrdersService(payload: any) {
  return request(`/server/api/tIottecNotify/queryTIottecNotify`, {
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