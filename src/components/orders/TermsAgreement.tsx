import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';

interface setCheckboxProps {
	setCheckbox: Dispatch<SetStateAction<boolean>>;
}

const TermsAgreement = ({ setCheckbox }: setCheckboxProps) => {
	const { register, setValue, watch } = useFormContext();

	const requiredData = [
		{ id: 'requiredCheckbox1', text: '[필수] 만 14세 이상 이용 동의' },
		{ id: 'requiredCheckbox2', text: '[필수] 개인정보 수집 및 이용' },
		{ id: 'requiredCheckbox3', text: '[필수] 개인정보 제 3자 제공' },
	];

	const optionalDate = [
		{ id: 'optionalCheckbox1', text: '[선택] 이벤트, 혜택 정보 수신 동의' },
		{
			id: 'optionalCheckbox2',
			text: '[선택] 이벤트, 혜택 정보 전송을 위한 개인정보 수집 및 이용 동의',
		},
	];

	// 모든 체크박스를 체크, 체크해제하는 로직
	const handleSelectAll = (e: React.FormEvent<HTMLInputElement>) => {
		if (e.currentTarget.checked) {
			// selectAll 체크박스가 체크되면
			requiredData.forEach((item) => {
				setValue(`${item.id}`, true); // 모든 체크박스의 value를 true로
			});
		} else {
			// selectAll 체크박스가 체크해제되면
			requiredData.forEach((item) => {
				setValue(`${item.id}`, false); // 모든 체크박스의 value를 false로
			});
		}
	};

	// 모든 필수 체크박스 선택시 전체 체크박스 true
	useEffect(() => {
		if (requiredData.every((item) => watch(`${item.id}`) === true)) {
			setValue('selectAllCheckbox', true);
			setCheckbox(true);
		} else {
			setValue('selectAllCheckbox', false);
			setCheckbox(false);
		}
	}, [requiredData.map((item) => watch(`${item.id}`))]);

	return (
		<>
			<div className="py-6">
				<div className="flex items-center  mb-3">
					<input
						type="checkbox"
						{...register('selectAllCheckbox')}
						onChange={handleSelectAll}
					/>
					<div
						className="
      font-semibold pl-2 "
					>
						필수 약관 전체 동의
					</div>
				</div>
				{requiredData.map((item) => (
					<div className="flex items-center py-2" key={item.id}>
						<input {...register(`${item.id}`)} type="checkbox" />
						<div className="text-textGray text-sm pl-2">{item.text}</div>
					</div>
				))}
				{optionalDate.map((item) => (
					<div className="flex items-center py-2" key={item.id}>
						<input {...register(`${item.id}`)} type="checkbox" />
						<div className="text-textGray text-sm pl-2">{item.text}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default TermsAgreement;
