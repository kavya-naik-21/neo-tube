import React from "react";
import searchIcon from "./search.svg";
import listIcon from "./list.svg"
const Header = () => {
  return (
    <div className="grid grid-flow-col mt-2 border-b-2 pb-2">
      <div className="col-span-1">
          <img src={listIcon} alt="listIcon" className="mt-3 ml-10 mr-2 h-6"></img>
        </div>
      <div className="flex justify-center">
        <img
          className="w-9 col-span-1 "
          src="https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144_v2.png"
          alt="youtubeLogo"
        ></img>
      </div>
      <div className="col-span-5 flex justify-center">
        <input
          className="border-2 rounded-l-full w-96 h-10 border-gray-300 pl-4 focus:outline-none focus:border-blue-200"
          placeholder="Search" 
        ></input>
        <div className="border-2 border-gray-300 rounded-r-full flex justify-center p-2 bg-gray-200">
          <img src={searchIcon} alt="searchIcon" className="ml-2 mr-2"></img>
        </div>
      </div>
      <div className="col-span-1">
        <span>User Name</span>
      </div>
    </div>
  );
};

export default Header;
