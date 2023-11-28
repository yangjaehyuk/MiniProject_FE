export const getDayOfWeek = (dateString: string): string => {
	const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
	const date = new Date(dateString);
	const dayOfWeek = daysOfWeek[date.getDay()];
	return dayOfWeek;
};
