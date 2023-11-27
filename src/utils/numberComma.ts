export function formatNumberWithCommas(number: number | undefined): string {
	// 숫자를 문자열로 변환하고, 정규식을 사용하여 3자리마다 쉼표를 추가
	if(number !== undefined) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	else return '';
	
}
