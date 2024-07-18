import { FC } from "react";
import logo from "../images/TestLogo.svg";
import avatar from "../images/senior-woman-doctor.png";
import settings from "../images/settings.svg";
import moreVert from "../images/more_vert.svg";
import home from "../images/home.svg";
import patients from "../images/group.svg";
import schedule from "../images/calendar_today.svg";
import message from "../images/chat_bubble.svg";
import transactions from "../images/credit_card.svg";

const Header: FC = () => {
  const navItems = [
    { name: "Overview", icon: home },
    { name: "Patients", icon: patients },
    { name: "Schedule", icon: schedule },
    { name: "Message", icon: message },
    { name: "Transactions", icon: transactions },
  ];

  return (
    <header className="bg-white rounded-[70px] h-[72px] py-3 px-5 xl:px-8 flex justify-between gap-3 items-center">
      <div className="logo cursor-pointer">
        <img src={logo} className="h-9 xl:h-12" alt="logo" />
      </div>

      <nav className="hidden lg:flex lg:flex-1 justify-between max-w-[662.59px]">
        {navItems.map(({ name, icon }, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center space-x-[9px] px-4 py-3 rounded-[41px] hover:bg-[#01F0D0] cursor-pointer"
            style={name === "Patients" ? { background: "#01F0D0" } : {}}
          >
            <img src={icon} alt={`${name} icon`} className="h-[17px] text-" />
            <span className="font-bold text-[12px] xl:text-[14px] leading-[19px]">
              {name}
            </span>
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-2">
        <img
          src={avatar}
          alt="Avatar"
          className="w-11 h-11 rounded-full cursor-pointer hidden lg:flex"
        />
        <div className="flex-col items-start text-[14px] leading-[19px] hidden lg:flex">
          <span className="font-bold text-left text-ellipsis">
            Dr. Jose Simmons
          </span>
          <span className="text-[#707070] text-left">General Practitioner</span>
        </div>
        <img
          src={settings}
          alt="Settings"
          className="h-5 cursor-pointer hidden lg:block"
        />
        <img src={moreVert} alt="Menu" className="h-[18px] cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
