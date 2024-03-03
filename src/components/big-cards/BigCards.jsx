import { StyledBigCard, StyledIcon,StyledUsername, StyledNumber, StyledCategory,StyledArrow, StyledUpdate,StyledBigCardHeader,StyledBigCardFooter } from "./big-card.styles";

const BigCard = ({icon, iconName, username, number, category, arrow, update, borderColor}) =>{

    return (
        <StyledBigCard $borderColor = {borderColor}>
            <StyledBigCardHeader>
                <StyledIcon src={icon} alt={iconName + 'icon'}/>
                <StyledUsername>{username}</StyledUsername>
            </StyledBigCardHeader>
            <StyledNumber>{number}</StyledNumber>
            <StyledCategory>{category}</StyledCategory>
            <StyledBigCardFooter>
                <StyledArrow src={arrow} alt="arrow" />
                <StyledUpdate $arrow={arrow}>{update}</StyledUpdate>
            </StyledBigCardFooter>

        
    </StyledBigCard>
    );
}

export default BigCard;