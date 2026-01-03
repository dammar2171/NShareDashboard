import OverViewCard from "./OverViewCard";
import "../../css/OverViewCss/OverViewCard.css";
function OverviewCardContainer() {
  const data1 = [
    {
      id: 1,
      title: "Javascript",
      image: "https://www.w3schools.com/js/img_javascript_480.jpg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
    {
      id: 2,
      title: "Javascript",
      image: "https://www.w3schools.com/js/img_javascript_480.jpg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
    {
      id: 3,
      title: "Javascript",
      image: "https://www.w3schools.com/js/img_javascript_480.jpg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
    {
      id: 4,
      title: "Javascript",
      image: "https://www.w3schools.com/js/img_javascript_480.jpg",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
  ];

  const data2 = [
    {
      id: 1,
      title: "computer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VE1owuNWu_OzWYU6i7RWT4Sfx4sfSB66Nw&s",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
    {
      id: 2,
      title: "computer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VE1owuNWu_OzWYU6i7RWT4Sfx4sfSB66Nw&s",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
    {
      id: 3,
      title: "computer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VE1owuNWu_OzWYU6i7RWT4Sfx4sfSB66Nw&s",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
    {
      id: 4,
      title: "computer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VE1owuNWu_OzWYU6i7RWT4Sfx4sfSB66Nw&s",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
    },
  ];
  return (
    <div className="overview-card-container">
      <div className="row">
        <div className="col-6">
          <h3>Latest Notes</h3>
          {data1.map((item) => (
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
          {data2.map((item) => (
            <OverViewCard
              key={item.id}
              title={item.title}
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
