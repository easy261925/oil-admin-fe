import request from '@/utils/axios';

// 所有的交易记录
export async function queryOrdersService(payload: any) {
  console.log('payload', payload)
  return request(`/server/api/tIottecNotify/queryTIottecNotify`, {
    method: 'POST',
    data: {
      pageno: payload.current,
      pagesize: payload.pageSize,
      condition: payload,
      dates: payload.mindate || payload.maxdate ? [{
        'datename': 'notifyTime',
        mindate: payload.mindate,
        maxdate: payload.maxdate
      }] : null
    },
  }).then(res => {
    return {
      success: res.status === 666,
      data: res.data,
      total: res.total
    }
  });
}