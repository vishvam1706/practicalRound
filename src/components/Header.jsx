import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <section className="flex justify-between p-7">
        <div className="flex">
          <img src="src\assets\Home\Icon.png" alt="logo" />
          <p className="text-[20px]">LOGo</p>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <img
            src="src\assets\Home\avatar.png"
            alt="logo"
            className="rounded-full"
          />
          <p>Marci Fumons</p>
          <FaAngleDown />
        </div>
      </section>
    </>
  );
};

export default Header;
