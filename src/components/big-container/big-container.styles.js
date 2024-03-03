import styled from 'styled-components';

const StyledBigCardContainer = styled.div`
	position: relative;
	top: -6.25rem;
	display: flex;
	margin: auto;
	flex-direction: column;
	gap: 1.5rem;
	align-items: center;
	transform: translateZ(0);

	@media screen and (width>=768px) {
		flex-direction: row;
		justify-content: center;
	}
`;

export { StyledBigCardContainer };
