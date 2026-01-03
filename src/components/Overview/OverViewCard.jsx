import "../../css/OverViewCss/OverViewCard.css";
const OverViewCard = ({ title, image ,description}) => {
  return (
    <div className="over-view-card">
      <div className="card">
        <img src={image} alt="" />
        <div className="detail">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default OverViewCard;
