import React from "react";

const UserShimmerCard = () => {
  return (
    <>
      {new Array(5).fill(1).map((item, index) => (
        <div className=" flex gap-2" key={index}>
          <div className="w-[45px] h-[45px] bg-gray-300 rounded-full mx-1 my-1"></div>
          <div className="flex flex-col gap-1 justify-center">
            <div className="w-[120px] h-[15px] bg-gray-300 rounded-sm"></div>
            <div className="w-[100px] h-[15px] bg-gray-300 rounded-sm"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserShimmerCard;
