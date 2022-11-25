import React from "react";
import PropTypes from "prop-types";

export default function GridItem(props) {
  let { rowSpan, colSpan, className, children } = props;
  const row_start = rowSpan ? `row-span-${rowSpan}` : "";
  const col_start = colSpan ? `col-span-${colSpan}` : "";
  return (
    <span className={[className, row_start, col_start].join(" ")}>
      {children}
    </span>
  );
}
