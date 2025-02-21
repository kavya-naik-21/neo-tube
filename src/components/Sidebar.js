import React from "react";

const Sidebar = () => {
  const sideBarItems = ["Home", "Shorts", "Subscriptions", "Youtube Music"];
  return (
    <div className="bg-slate-400 w-52">
      {sideBarItems.map((sideBarItem) => (
        <div>{sideBarItem}</div>
      ))}
    </div>
  );
};

export default Sidebar;
