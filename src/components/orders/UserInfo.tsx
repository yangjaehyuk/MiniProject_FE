import React, { useState } from 'react';
import styles from '../../components/cart/Cart.module.css';
import { Input } from '@material-tailwind/react';
import { useFormContext } from 'react-hook-form';

const UserInfo = () => {
	const {
		setValue,
		watch,
		register,
		formState: { errors },
	} = useFormContext();

	const [isCheckAll, setIsCheckAll] = useState(true);
	const reservationName = watch('reservationName');
	const reservationNumber = watch('reservationNumber');

	console.log(reservationName);

	const handleCheckboxChange = () => {
		// const yourCheckboxFieldValue = watch('yourCheckboxFieldName');
		setIsCheckAll((prev) => !prev);

		console.log(isCheckAll);

		if (isCheckAll) {
			setValue('userName', reservationName);
			setValue('userNumber', reservationNumber);
		} else {
			setValue('userName', '');
			setValue('userNumber', '');
		}
	};

	const isReservationInfoFilled = reservationName && reservationNumber;

	console.log('34:', isReservationInfoFilled);
	console.log('35:', !isReservationInfoFilled);
	console.log('36:', !!isReservationInfoFilled);

	return (
		<>
			<div className={styles.wrap}>
				<div className="font-semibold text-md pb-2 mb-3">예약자 정보</div>
				<div className="flex flex-col ">
					<Input
						variant="static"
						label="성명"
						placeholder="성명을 입력해주세요."
						size="md"
						{...register('reservationName', {
							required: true,
							pattern: /^[가-힣a-zA-Z]+$/,
						})}
						crossOrigin={'anonymous'}
					/>
					<div className="text-red-500 text-[10px] mt-2  ">
						{errors?.reservationName?.type === 'pattern' && 'required' && (
							<div>예약자 이름은 한글, 영문만 입력 가능합니다.</div>
						)}
					</div>
					<div className="mt-8">
						<Input
							variant="static"
							label="휴대폰 번호 "
							placeholder="휴대폰 번호를 입력해주세요."
							{...register('reservationNumber', {
								required: true,
								pattern: /^([0-9]{3})-([0-9]{3,4})-([0-9]{4})$/,
							})}
							crossOrigin={'anonymous'}
						/>
					</div>
					<div className="text-red-500 text-[10px] mt-2  ">
						{errors?.reservationNumber?.type === 'pattern' && 'required' && (
							<div>010-1234-1234 형식으로 입력해주세요.</div>
						)}
					</div>
				</div>
			</div>
			<div className={styles.wrap}>
				<div className="font-semibold text-md pb-2">이용자 정보</div>
				<div className="bg-bgGray text-xs h-8 text-textGray pl-3 flex items-center">
					상품 이용 시 필요한 필수 정보입니다.
				</div>
				<div className="flex mt-3 pr-3">
					<input
						type="checkbox"
						// {...register('yourCheckboxFieldName')}
						onChange={handleCheckboxChange}
						disabled={!isReservationInfoFilled}
					/>

					<div className="text-md"> 예약자 정보와 동일합니다.</div>
				</div>
				<div className="flex flex-col mt-6">
					<Input
						variant="static"
						label="성명"
						placeholder="성명을 입력해주세요."
						size="md"
						{...register('userName', {
							required: true,
							pattern: /^[가-힣a-zA-Z]+$/,
						})}
						crossOrigin={'anonymous'}
					/>
					<div className="text-red-500 text-[10px] mt-2  h-[10px]">
						{errors?.userName?.type === 'pattern' && 'required' && (
							<div>예약자 이름은 한글, 영문만 입력 가능합니다.</div>
						)}
					</div>
					<div className="mt-8">
						<Input
							variant="static"
							label="휴대폰 번호 "
							placeholder="휴대폰 번호를 입력해주세요."
							{...register('userNumber', {
								required: true,
								pattern: /^([0-9]{3})-([0-9]{3,4})-([0-9]{4})$/,
							})}
							crossOrigin={'anonymous'}
						/>
					</div>
					<div className="text-red-500 text-[10px] mt-2  ">
						{errors?.userNumber?.type === 'pattern' && 'required' && (
							<div>010-1234-1234 형식으로 입력해주세요.</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default UserInfo;
