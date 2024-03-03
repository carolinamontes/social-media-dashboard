import { StyledSmallCard } from './small-card.styles';

const SmallCard = ({
	icon,
	iconName,
	title,
	number,
	arrow,
	update
}) => {
	return (
		<StyledSmallCard>
			<span>{title}</span>
			<img src={icon} alt={iconName} />
			<span>{number}</span>
			<div>
				<img src={arrow} alt='' />
				<span>{update}</span>
			</div>
		</StyledSmallCard>
	);
};

export default SmallCard;