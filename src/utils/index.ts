import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export const handleArrowBackClick = () => {
	window.history.back();
};

export const setCookie = (accessToken: string) => {
	try {
		document.cookie = `accessToken=${accessToken};max-age=3600;path=/;secure`;
	} catch (e) {
		console.error(e);
		alert('쿠키설정에 실패했습니다.');
	}
};

export function getCookie(name: string): string | undefined {
	const cookieValue = document.cookie
		.split('; ')
		.find((row) => row.startsWith(`${name}=`))
		?.split('=')[1];
	return cookieValue || undefined;
}

export const removeCookie = async () => {
	try {
		document.cookie = 'accessToken=; Max-Age=0; path=/';
	} catch (e) {
		console.error(e);
		alert('쿠키삭제에 실패했습니다.');
	}
};

export const logout = () => {
	removeCookie();
	swal({ title: '로그아웃에 성공했습니다.', icon: 'success' });
};

export const checkAccessToken = () => {
	const accessToken = getCookie('accessToken');
	if (!accessToken) {
		return false;
	}
	return true;
};

//mypage, orders, result
