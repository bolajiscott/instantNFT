import React from "react";
import eagle from "../assets/eagle.png";

function Farm() {
  return (
    <div className="w-3/5 flex items-center justify-between text-white p-10 rounded-lg bg-primary">
      <img src={eagle} className="w-20"></img>
      <div className="flex flex-col">
        <div>Earn Eagle</div>
        <div> Stake Eagle</div>
      </div>
      <div className="flex flex-col">
        <div>APY</div>
        <div> 20%</div>
      </div>
      <button className=" bg-secondary px-6 rounded-md py-2 hover:scale-95 transition duration-200">Stake</button>
    </div>
  );
}

export default Farm;
