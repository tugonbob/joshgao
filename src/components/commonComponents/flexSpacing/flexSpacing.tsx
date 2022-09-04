import React from "react";

export function FlexSpacing({
  flexGrow = 1,
  className = "",
  style,
  d,
}: {
  flexGrow?: number;
  className?: string;
  style?: React.CSSProperties;
  d?: boolean;
}) {
  require("./styles.css");
  let debug = d ? "d" : "";
  return (
    <div className={`flex-spacing-component ${debug}`} style={{ flexGrow }} />
  );
}
