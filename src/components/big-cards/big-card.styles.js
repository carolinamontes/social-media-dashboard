import styled from 'styled-components';

const StyledBigCard = styled.div`
	position: relative;
	width: 326px;
	height: 216px;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-shrink: 0;
	padding-block: 2rem 1.5rem;
	border-radius: 0.3125rem;
	background-color: #252b42;
	&::after {
		content: '';
		position: absolute;
		top: -5px;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		${({ $borderColor }) =>
			$borderColor.includes('gradient')
				? `background-image: ${$borderColor}`
				: `background-color: ${$borderColor}`}
	}
`;

const StyledBigCardHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	width: 86px;
	margin-bottom: 1rem;
`;

const StyledIcon = styled.img`
	width: 20px;
`;

const StyledUsername = styled.span`
	color: #8c98c6;
`;

const StyledNumber = styled.span`
	font-size: 3.5rem;
	color: #ffffff;
	margin-bottom: 0.25rem;
	font-weight: 700;
`;

const StyledCategory = styled.span`
	font-size: 0.75rem;
	color: #8c98c6;
	letter-spacing: 5px;
	text-transform: uppercase;
	margin: 0;
	margin-bottom: 1.25rem;
`;

const StyledBigCardFooter = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	width: 90px;
`;

const StyledArrow = styled.img``;

const StyledUpdate = styled.span`
	font-size: 0.75rem;
	color: green;
	color: ${({ $arrow }) => ($arrow.includes('up') ? '#1eb589' : '#DC414C')};
`;

export {
	StyledBigCard,
	StyledIcon,
	StyledUsername,
	StyledNumber,
	StyledCategory,
	StyledArrow,
	StyledUpdate,
	StyledBigCardHeader,
	StyledBigCardFooter
};
