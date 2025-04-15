import React from "react";
import { FaStar } from "react-icons/fa";

function PropertyRating({ propertyId, inPage }: Readonly<{ propertyId: string, inPage: boolean }>) {
  const RATING = 4.7;
  const COUNT = 100;

  const classname = `flex gap-1 items-center ${inPage ? "text-md" : "text-xs"}`;
  const countText = COUNT > 1 ? "reviews" : "review";
  const countValue = `(${COUNT}) ${inPage ? countText : ""}`;

  return (
    <span className={classname}>
      <FaStar className="w-3 h-3" />
      {RATING} {countValue}
    </span>
  )
}

export default PropertyRating;
