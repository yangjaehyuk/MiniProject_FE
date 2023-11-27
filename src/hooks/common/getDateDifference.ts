export const getDateDifference = (
	startDateString: string,
	endDateString: string,
): number => {
	const startDate = new Date(startDateString);
	const endDate = new Date(endDateString);

	const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

	const differenceInDays = Math.abs(
		(endDate.getTime() - startDate.getTime()) / oneDayInMilliseconds,
	);

	return differenceInDays;
};
