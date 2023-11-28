import { Button } from '@material-tailwind/react';
import React from 'react';
import { RegionProdNavBtnProps } from 'types/RegionProd.type';
import { regionToKor } from 'utils/switchNameToKor';

function RegionProdNavBtn({
	index,
	region,
	category,
	isActive,
	handleClick,
}: RegionProdNavBtnProps) {
	return (
		<Button
			variant="outlined"
			className={`border-lightGray rounded-full ${isActive ? 'bg-bgGray' : ''}`}
			size="sm"
			onClick={() => handleClick(index)}
		>
			{regionToKor(region)} {category}
		</Button>
	);
}

export default RegionProdNavBtn;
