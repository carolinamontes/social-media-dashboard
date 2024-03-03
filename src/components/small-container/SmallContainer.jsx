import { SMALL_CARD_DATA } from "../../constants/small-card-data";
import SmallCard from "../small-card/SmallCard";

const SmallContainer = () =>{
    return (
        <div>
        {SMALL_CARD_DATA.map(card => (
                <SmallCard key={card.id}{...card}/>
            ))}
    </div>
    );
};

export default SmallContainer;