import request from '@/utils/axios';

export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}

// TODO 模拟获取用户信息
export async function getUserInfoService(): Promise<any> {
  // return request(`/server/api/sysUser/getUserInfo`, {
  //   method: 'POST',
  // });
  return {
    success: true,
    message: '管理员登录',
    data: {
      user: {
        id: '1',
        userName: '管理员',
      },
      authority: []
    }
  }
}
