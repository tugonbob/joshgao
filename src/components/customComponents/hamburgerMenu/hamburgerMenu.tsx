import React from "react";

export function HamburgerMenu({
  className,
  style,
  d,
}: {
  className?: string;
  style?: React.CSSProperties;
  d?: boolean;
}) {
  require("./styles.css");
  let debug = d ? "d" : null;
  return (
    <div
      className={`right-constraint ${debug} ${className}`}
      onClick={() => console.log("hi")}
    >
      <div className="horizontal-line" />
      <div className="horizontal-line" />
      <div className="horizontal-line" />
    </div>
  );
}
