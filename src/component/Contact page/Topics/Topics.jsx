import React from "react";
import menu from "../../../assets/Topic-assests/topicmenu.svg";
import gallery from "../../../assets/Topic-assests/topicgallary.svg";
import share from "../../../assets/Topic-assests/topicshare.svg";
import chat from "../../../assets/Topic-assests/message-topic.svg";
const Topics = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center ">
        <h1 className="text-4xl text-rubik text-bold">Most asked Topics</h1>
      </div>
      <div className="mt-10">
        <div className="flex justify-center items-center gap-[10%]">
          <div className="flex justify-center items-center py-3 px-3 border-r-4 rounded-2 border-4">
            <img className="" src={menu} alt="Your Company" />
            <p>Sharing & Collaboration</p>
          </div>
          <div className="flex justify-center items-center py-3 px-3 border-r-4 rounded-2 border-4">
            <img className="" src={menu} alt="Your Company" />
            <p>Sharing & Collaboration</p>
          </div>
          <div className="flex justify-center items-center py-3 px-3 border-r-4 rounded-2 border-4">
            <img className="" src={menu} alt="Your Company" />
            <p>Sharing & Collaboration</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[10%]">
          <div className="flex justify-center items-center py-3 px-3 border-r-4 rounded-2 border-4">
            <img className="" src={menu} alt="Your Company" />
            <p>Sharing & Collaboration</p>
          </div>
          <div className="flex justify-center items-center py-3 px-3 border-r-4 rounded-2 border-4">
            <img className="" src={menu} alt="Your Company" />
            <p>Sharing & Collaboration</p>
          </div>
          <div className="flex justify-center items-center py-3 px-3 border-r-4 rounded-2 border-4">
            <img className="" src={menu} alt="Your Company" />
            <p>Sharing & Collaboration</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[10%]">
          <div className="flex justify-center items-center py-3 px-3 border-r-4 rounded-2 border-4">
            <img className="" src={menu} alt="Your Company" />
            <p>Sharing & Collaboration</p>
          </div>
          <div className="flex justify-center items-center py-3 px-3 border-r-4 rounded-2 border-4">
            <img className="" src={menu} alt="Your Company" />
            <p>Sharing & Collaboration</p>
          </div>
          <div className="flex justify-center items-center py-3 px-3 border-r-4 rounded-2 border-4">
            <img className="" src={menu} alt="Your Company" />
            <p>Sharing & Collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
