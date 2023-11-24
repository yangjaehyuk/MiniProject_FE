const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'short' };
  
  const dateString = date.toLocaleDateString('ko-KR', options);
  
  const dateParts = dateString.match(/(\d{2}).(\d{2}).\s\((\S+)\)/);
  if (dateParts) {
    return `${dateParts[1]}.${dateParts[2]}(${dateParts[3]})`;
  }

  return dateString;
};

const formatFullDateRange = (startDate: Date, endDate: Date | null): string => {

  if(endDate !== null) {
    const startFormatted = formatDate(startDate);
    const endFormatted = formatDate(endDate);
    const nightCount = Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  
    return `${startFormatted}~${endFormatted}, ${nightCount}박`;

  }
  else return `${formatDate(startDate)} 체크인 검색`;
};

export default formatFullDateRange;

export const formatMonthDate = (start: Date, end: Date | null): string => {
  const startMonth = start.getMonth() + 1;
  const startDay = start.getDate();

  if(end !== null) {
    const endMonth = end.getMonth() + 1;
    const endDay = end.getDate();
  
    return `${startMonth}.${startDay} ~ ${endMonth}.${endDay}`;
  }
  else return `${startMonth}.${startDay}`;
}