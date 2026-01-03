import { FaUserFriends } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import "../../css/OverViewCss/OverViewCardList.css";
function OverViewCardList() {
  const overviewData = [
    {
      heading: "Total Users",
      count: "10K",
      icon: <FaUserFriends />,
    },
    {
      heading: "Total Notes",
      count: "1K",
      icon: <MdOutlineLibraryBooks />,
    },
    {
      heading: "Total Quizzes",
      count: "9K",
      icon: <RiQuestionnaireLine />,
    },
    {
      heading: "Total Notices",
      count: "1K",
      icon: <MdOutlineNotificationsActive />,
    },
  ];

  return (
    <section className="overview-card-list">
      {overviewData.map((item, index) => (
        <div className="overview-card" key={index}>
          <div className="overview-icon">{item.icon}</div>
          <div className="overview-info">
            <h2>{item.count}</h2>
            <p>{item.heading}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default OverViewCardList;
