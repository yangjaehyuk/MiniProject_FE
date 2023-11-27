import React, { useCallback, useEffect } from 'react';
import {
	Button,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
} from '@material-tailwind/react';
import { DateRange, KeyboardArrowDown, LocationOn } from '@mui/icons-material';
import { RegionListNavProps } from 'types/Region.type';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { formatMonthDate } from 'utils/formatDate';
import { capacityState } from 'recoil/atoms/capacityAtom';
import { useParams } from 'react-router-dom';
import { regionToKor } from 'utils/switchNameToKor';
import { OrderEnum, orderState, orderTextState } from 'recoil/atoms/orderAtom';
import isEnumValue from 'utils/isEnumValue';

function RegionListNav({
	handleRegionOpen,
	handleOptionOpen,
	totalElements,
	refetch,
	searchParams,
	handleChangeParams,
}: RegionListNavProps) {
	const { region } = useParams();
	const startDate = useRecoilValue(checkInDateState);
	const endDate = useRecoilValue(checkOutDateState);
	const capacity = useRecoilValue(capacityState);
	const setOrder = useSetRecoilState(orderState);
	const orderText = useRecoilValue(orderTextState);
	const orderParam = searchParams.get('order');

	// const handleChangeParams = useCallback(
	// 	(order: OrderEnum) => {
	// 		searchParams?.set('order', order);
	// 		console.log(searchParams);
	// 		if (setSearchParams) setSearchParams(searchParams);
	// 	},
	// 	[orderParam],
	// );

	useEffect(() => {
		if (isEnumValue(OrderEnum, orderParam)) {
			setOrder(orderParam);
		}
		if (!orderParam) {
			setOrder(OrderEnum.STAR_DESC);
		}
		if (refetch) refetch();
	}, [searchParams]);

	const formattingDate = formatMonthDate(startDate, endDate);

	return (
		<div>
			<div className="flex gap-3 justify-center py-6">
				<Button
					variant="outlined"
					size="sm"
					className="flex items-center gap-1 w-36 border-borderGray"
					onClick={handleRegionOpen}
				>
					<LocationOn />
					<span className="text-content lg:text-title font-normal">
						{regionToKor(region ?? '')}
					</span>
				</Button>
				<Button
					variant="outlined"
					size="sm"
					className="flex items-center gap-1 w-auto border-borderGray"
					onClick={handleOptionOpen}
				>
					<DateRange />
					<span className="text-content lg:text-title font-normal">
						{formattingDate}, {capacity}명
					</span>
				</Button>
			</div>
			<div className="flex justify-between items-center bg-bgGray pl-3 pr-1 py-1 ml-[-1.25rem] mr-[-1.25rem]">
				<p className="text-sm">
					<span className="text-secondaryTextGray">{totalElements}</span>개의
					숙소
				</p>
				<Menu>
					<MenuHandler>
						<Button size="sm" variant="text">
							<span className="text-sm">{orderText}</span>{' '}
							<KeyboardArrowDown fontSize="small" />
						</Button>
					</MenuHandler>
					<MenuList>
						<MenuItem onClick={() => handleChangeParams?.(OrderEnum.STAR_DESC)}>
							평점 높은 순
						</MenuItem>
						<MenuItem
							onClick={() => handleChangeParams?.(OrderEnum.PRICE_DESC)}
						>
							예약가 높은 순
						</MenuItem>
						<MenuItem onClick={() => handleChangeParams?.(OrderEnum.PRICE_ASC)}>
							예약가 낮은 순
						</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</div>
	);
}

export default RegionListNav;
