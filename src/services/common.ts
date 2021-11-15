import request from '@/utils/axios';

// 用户积分记录
export async function queryXiaofeizheService(payload: any) {
  return request(`/server/api/xiaofeizhe/queryXiaofeizhe`, {
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

// 查看所有邮寄接口
export async function queryShiwuJiaoyiService(payload: any) {
  return request(`/server/api/jiaoyiShangpin/queryShiwuJiaoyi`, {
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

// 处理邮寄接口
export async function dealShiwuJiaoyiService(payload: any) {
  return request(`/server/api/jiaoyiShangpin/dealShiwuJiaoyi`, {
    method: 'POST',
    data: {
      id: payload.id
    }
  }).then(res => {
    return {
      success: res.status === 666,
    }
  });
}

// 查看用户积分交易记录
export async function queryShangpinJiaoyiService(payload: any) {
  return request(`/server/api/jiaoyiShangpin/queryShangpinJiaoyi`, {
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

// 查看商户积分申请接口
export async function queryHuanxianService(payload: any) {
  return request(`/server/api/jiaoyiHuanxian/queryHuanxian`, {
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

// 处理核销接口
export async function dealHuanxianService(payload: any) {
  return request(`/server/api/jiaoyiShangpin/dealHuanxian`, {
    method: 'POST',
    data: {
      id: payload.id
    }
  }).then(res => {
    return {
      success: res.status === 666,
    }
  });
}

// 查看商户
export async function queryShanghuService(payload: any) {
  return request(`/server/api/shanghu/queryShanghu`, {
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

// 查看商品
export async function queryShangpinService(payload: any) {
  return request(`/server/api/shangpin/queryShangpin`, {
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

// 上架商品
export async function onsaleShangpinService(payload: any) {
  const params = new FormData();
  for (const key in payload) {
    if (payload.hasOwnProperty(key)) {
      const item = payload[key] || '';
      if (Array.isArray(item)) {
        // eslint-disable-next-line array-callback-return
        item.map((i) => {
          params.append(([key] as unknown) as string, i);
        });
      } else {
        params.append(([key] as unknown) as string, item);
      }
    }
  }
  return request(`/server/api/shangpin/onsaleShangpin`, {
    body: params,
    method: 'POST',
  });
}

// 商品下架
export async function offshelvesShangpinService(payload: any) {
  return request(`/server/api/shangpin/offshelvesShangpin`, {
    method: 'POST',
    data: payload
  }).then(res => {
    return {
      success: res.status === 666,
    }
  });
}

// 商品上架
export async function onshelvesShangpinService(payload: any) {
  return request(`/server/api/shangpin/onshelvesShangpin`, {
    method: 'POST',
    data: payload
  }).then(res => {
    return {
      success: res.status === 666,
    }
  });
}