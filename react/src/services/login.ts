import request from '@/utils/request';
import { config } from '@/utils/config'

export interface LoginParamsType {
  username: string;
  password: string;
  mobile?: string;
  captcha?: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
	return request({
		fullUrl: config.SECURITY_REQ_URL + '/api/user/sysUser/login',
		method: 'POST',
		data: params,
	});
}

export async function logout() {
	return request({
		fullUrl: config.SECURITY_REQ_URL + '/api/user/sysUser/logout',
		method: 'POST',
	});
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
