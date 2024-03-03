import styled from 'styled-components';

const StyledSmallCardContainer = styled.div`
	display: grid;
	gap: 1rem;

	@media screen and (width>=768px) {
		grid-template-columns: repeat(4, 15.9375rem);
	}
`;

export { StyledSmallCardContainer };
