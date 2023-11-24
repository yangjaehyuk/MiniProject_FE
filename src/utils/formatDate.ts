const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		weekday: 'short',
	};

	const dateString = date.toLocaleDateString('ko-KR', options);

	const dateParts = dateString.match(/(\d{2}).(\d{2}).\s\((\S+)\)/);
	if (dateParts) {
		return `${dateParts[1]}.${dateParts[2]}(${dateParts[3]})`;
	}

	return dateString;
};

export const formatFullDateRange = (
	startDate: Date,
	endDate: Date | null,
): string => {
	if (endDate !== null) {
		const startFormatted = formatDate(startDate);
		const endFormatted = formatDate(endDate);
		const nightCount = Math.round(
			(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
		);

		return `${startFormatted}~${endFormatted}, ${nightCount}박`;
	} else return `${formatDate(startDate)} 체크인 검색`;
};

const footerFormatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit' };
  
  // This will produce a date string in the format "MM.DD"
  const dateString = date.toLocaleDateString('ko-KR', options).replace(/(\.)/g, '');
  const dateParts = dateString.match(/(\d{2}).(\d{2})/);

  if (dateParts) {
    return `${dateParts[1]}.${dateParts[2]}`; // Inserts a period between MM and DD
  }

  return dateString;
};

export const footerFormatFullDateRange = (
	startDate: Date,
	endDate: Date,
): string => {
	const startFormatted = footerFormatDate(startDate);

	const endFormatted = footerFormatDate(endDate);
	return `${startFormatted}~${endFormatted}`;
};
