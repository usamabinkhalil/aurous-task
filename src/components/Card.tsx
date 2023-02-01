import React from "react";
import { StarIcon, EyeIcon } from "@heroicons/react/24/outline";

function Card() {
  return (
    <div className="flex flex-col items-center">
      <img className="" src="/product.jpg" alt="" />
      <div className="text-green-500 uppercase font-medium text-lg">
        Pure Body Extra
      </div>
      <div className="flex">
        <StarIcon className="h-6 w-6" aria-hidden="true" />
        <StarIcon className="h-6 w-6" aria-hidden="true" />
        <StarIcon className="h-6 w-6" aria-hidden="true" />
        <StarIcon className="h-6 w-6" aria-hidden="true" />
        <StarIcon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="text-xs">3374 reviews</div>
      <div className="text-xs">DAILY DETOX</div>
      <div>
        DETOXIFY WITH ZEOLITE: Cleanse your body of toxins, heavy metals and
        pollutants with the original.
      </div>
      <div className="font-bold text-2xl">As low as $63.83</div>
      <button className="flex justify-center bg-green-500 text-white font-medium w-full py-4 mt-2">
        <EyeIcon className="h-6 w-6 mr-2" aria-hidden="true" /> View Details
      </button>
    </div>
  );
}

export default Card;
