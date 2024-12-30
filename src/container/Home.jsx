import { useState } from "react";
import Header from "../components/Header";
import { RxCross2 } from "react-icons/rx";

const userList = [
  {
    image: `src/assets/Home/avatar.png`,
    name: "Tom Cruise 1",
    email: "tomcruise@gmail.com",
    date: "May 26, 2019",
  },
  {
    image: `src/assets/Home/avatar.png`,
    name: "Tom Cruise 2",
    email: "tomcruise@gmail.com",
    date: "May 26, 2019",
  },
  {
    image: `src/assets/Home/avatar.png`,
    name: "Tom Cruise 3",
    email: "tomcruise@gmail.com",
    date: "May 26, 2019",
  },
  {
    image: `src/assets/Home/avatar.png`,
    name: "Tom Cruise 4",
    email: "tomcruise@gmail.com",
    date: "May 26, 2019",
  },
  {
    image: `src/assets/Home/avatar.png`,
    name: "Tom Cruise 5",
    email: "tomcruise@gmail.com",
    date: "May 26, 2019",
  },
];

const Home = () => {
  const [popUp, setPopUp] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [search, setSearch] = useState("");

  const filteredUsers = userList.filter((user) =>
    user.name.includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex items-center gap-10">
        Search{" "}
        <input
          type="text"
          className="my-2 p-2 border-[1px] rounded-[5px] w-full"
          placeholder="Search by name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <table className="w-full">
          <thead>
            <tr className="border-b-[1px] text-[#9FA2B4]">
              <th className="text-left">User Name</th>
              <th className="text-left">Email Id</th>
              <th className="text-left">Date</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((data, index) => (
              <tr className="text-[#252733] border-b-[1px]" key={index}>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img src={data.image} alt="user profile" />
                    {data.name}
                  </div>
                </td>
                <td>{data.email}</td>
                <td>{data.date}</td>
                <td>
                  <div
                    className="rounded-full bg-red-600 w-fit text-white px-6 py-1 cursor-pointer"
                    onClick={() => {
                      setPopUp(index);
                      setShowPopUp(true);
                    }}
                  >
                    View
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showPopUp && (
        <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-25">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
            <div className="relative flex p-10 gap-10 items-center">
              <div
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setShowPopUp(false)}
              >
                <RxCross2 />
              </div>
              <div>
                <img
                  src={userList[popUp].image}
                  className="w-[84px]"
                  alt="Popup profile"
                />
              </div>
              <div>
                <p>Name: {userList[popUp].name}</p>
                <p>Email: {userList[popUp].email}</p>
                <p>Date: {userList[popUp].date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
