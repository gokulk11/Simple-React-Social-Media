import React from "react";
import post from "../items";

const HeroList = () => {
  const story = post.data.postArray;
  return (
    <div>
      <div>
        <ul className="flex justify-around">
          {story.map((stor) => {
            const isRecentStory = stor.id <= 2;
            const borderStyle = isRecentStory ? "border-2 border-green-500" : "";
            return (
              <li className="flex flex-col gap-1 items-center">
                <img
                  className={`w-[45px] h-[45px] rounded-lg border ${borderStyle}`}
                  src={stor.profilepic}
                  alt="story"
                />
                <span className="text-[.5rem]">{stor.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeroList;
