import React from "react";

const PostShimmerCard = () => {
  return (
    <div>
      {new Array(6).fill(1).map((item, index) => (
        <div
          key={index}
          className="max-w-[700px] bg-gray-200 max-h-[430px] mb-5 rounded-md px-6 py-6 sScreens:px-1"
        >
          <div className="flex gap-5">
            <div className="bg-gray-300 mb-3 rounded-full h-[48px] w-[48px]"></div>
            <div className="flex flex-col gap-1 justify-center">
              <div className="w-[120px] h-[15px] bg-gray-300 rounded-sm"></div>
              <div className="w-[100px] h-[15px] bg-gray-300 rounded-sm"></div>
            </div>
          </div>
          <div className="h-[20px] max-w-[500px] bg-gray-300 mb-3 rounded-md"></div>
          <div className="h-[260px] bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default PostShimmerCard;
