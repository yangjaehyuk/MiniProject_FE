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

function RegionListNav({
	handleRegionOpen,
	handleOptionOpen,
}: RegionListNavProps) {
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
						11.20 ~ 11.21, 2명
					</span>
				</Button>
			</div>
			<div className="flex justify-between items-center bg-bgGray pl-3 pr-1 py-1 ml-[-1rem] mr-[-1rem]">
				<p className="text-sm">
					<span className="text-secondaryTextGray">427</span>개의 숙소
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
