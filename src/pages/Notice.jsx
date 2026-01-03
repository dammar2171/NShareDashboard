import CommanAdd from "../components/CommanAdd";
import CommonList from "../components/CommonList";

function Notice() {
  const noticeData = [
    {
      id: "1",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      title: "goverment",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
    {
      id: "2",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      title: "goverment",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
    {
      id: "3",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      title: "goverment",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
    {
      id: "4",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      title: "goverment",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
    {
      id: "5",
      image:
        "https://www.moha.gov.np/images/cache/e66443e81e8cc9c4fa5c099a1fb1bb87/940x380-%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%A8%E0%A4%BE(5).jpg",
      title: "goverment",
      issueDate: "2082-8-19",
      publisher: "Dammar Bhatt",
      tags: { first: "#goverment,", second: "#nepal" },
      description: "This is a news related govement",
    },
  ];
  const handleUpdate = (item) => {
    console.log(item);
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  const handleAdd = () => {
    console.log("notices added");
  };
  return (
    <>
      <CommanAdd
        heading={"Welcome to Notice Section"}
        buttonName={"Add Notice"}
        handleAdd={handleAdd}
      />
      {noticeData.map((item) => (
        <CommonList
          key={item.id}
          item={item}
          hadleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </>
  );
}

export default Notice;
