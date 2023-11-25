import React from 'react';
import {
	Button,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
} from '@material-tailwind/react';
import { DateRange, KeyboardArrowDown, LocationOn } from '@mui/icons-material';
import { RegionListNavProps } from 'types/Region.type';
import { useRecoilValue } from 'recoil';
import { endDateState, startDateState } from 'recoil/atoms/dateAtom';
import { formatMonthDate } from 'utils/formatDate';
import { capacityState } from 'recoil/atoms/capacityAtom';

function RegionListNav({
	handleRegionOpen,
	handleOptionOpen,
	totalElements,
}: RegionListNavProps) {
	const startDate = useRecoilValue(startDateState);
	const endDate = useRecoilValue(endDateState);
	const capacity = useRecoilValue(capacityState);

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
					<span className="text-content lg:text-title font-normal">서울</span>
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
							<span className="text-sm">평점 높은 순</span>{' '}
							<KeyboardArrowDown fontSize="small" />
						</Button>
					</MenuHandler>
					<MenuList>
						<MenuItem>평점 높은 순</MenuItem>
						<MenuItem>예약가 높은 순</MenuItem>
						<MenuItem>예약가 낮은 순</MenuItem>
					</MenuList>
				</Menu>
			</div>
		</div>
	);
}

export default RegionListNav;
