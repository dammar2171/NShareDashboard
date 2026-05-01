import OverViewCard from "./OverViewCard";
import "../../css/OverViewCss/OverViewCard.css";
import { useContext } from "react";
import { StoreContext } from "../../store/Store";
function OverviewCardContainer() {
  const { notes, quizs } = useContext(StoreContext);

  return (
    <div className="overview-card-container">
      <div className="row">
        <div className="col-6">
          <h3>Latest Notes</h3>
          {notes.map((item) => (
            <OverViewCard
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
        <div className="col-6">
          <h3>Latest Quiz</h3>
          {quizs.map((item) => (
            <OverViewCard
              key={item.id}
              title={item.category}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverviewCardContainer;
