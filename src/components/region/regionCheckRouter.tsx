import React, { ComponentType, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryTitles } from 'types/Category.type';
import { RegionTitles } from 'types/Region.type';
import isEnumValue from 'utils/isEnumValue';

// HOC 함수
const regionCheckRouter = <P extends object>(
	WrappedComponent: ComponentType<P>,
) => {
	// HOC 컴포넌트
	const WithHOC: React.FC<P> = (props) => {
		const navigate = useNavigate();
		const { category, region } = useParams();
		const cateUpper = category?.toUpperCase();
		const regionUpper = region?.toUpperCase();
		// 유효한 카테고리 값이 주소창에 있는지 확인
		useEffect(() => {
			// 유효한 카테고리 값이 아니라면
			if (
				!isEnumValue(CategoryTitles, cateUpper) ||
				!isEnumValue(RegionTitles, regionUpper)
			) {
				// 바로 404페이지로 이동 시키기
				navigate('/404', { replace: true });
			}
		}, [cateUpper]);

		// 만약 주소창에 유효한 카테고리 값이 입력되었다면
		if (
			isEnumValue(CategoryTitles, cateUpper) &&
			isEnumValue(RegionTitles, regionUpper)
		) {
			return <WrappedComponent {...props} />;
		}
		return null;
	};

	return WithHOC;
};

export default regionCheckRouter;
