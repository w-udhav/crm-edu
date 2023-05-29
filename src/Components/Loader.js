import React from "react";
import Lottie from "lottie-react";
import Paperplane from "../Assets/Lotties/Paperplane.json";

export default function Loader() {
  return (
    <div className="w w-full h-full flex justify-center items-center">
      <Lottie animationData={Paperplane} />
    </div>
  );
}
