import React from "react";

export default function PrerenderTailwind() {
  // please insert all the computed class name
  // bg-${color} // color = 'black'
  // bg-black
  return (
    <div className="hidden">
      <div className="text-primary sm:text-primary sm-down:text-primary"></div>
      <div className="text-secondary sm:text-secondary sm-down:text-secondary"></div>
      <div className="text-white sm:text-white sm-down:text-white"></div>

      {/* slider */}
      <div className="h-144 sm-down:h-48"></div>
    </div>
  );
}
