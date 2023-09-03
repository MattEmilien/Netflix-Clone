import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 text-white">
      <div className="text-4xl">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
      <p className="text-lg mt-4">Loading...</p>
    </div>
  );
};

export default Loading;
