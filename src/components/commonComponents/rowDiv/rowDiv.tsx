import React, { CSSProperties } from "react";

export function RowDiv({
  children,
  style,
  className,
  d,
}: {
  children?: any;
  style?: CSSProperties;
  className?: string;
  d?: boolean;
}) {
  return (
    <div
      style={{
        ...style,
        ...styles.rowDiv,
        ...{ border: d ? "1px black solid" : undefined },
      }}
      className={className}
    >
      {children}
    </div>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  rowDiv: {
    display: "flex",
    alignItems: "center",
  },
};