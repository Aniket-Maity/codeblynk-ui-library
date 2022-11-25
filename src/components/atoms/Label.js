import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";

export default function Label({
  text,
  severity,
  children,
  colSpan,
  flow,
  type,
  xSpacing,
  className,
}) {
  const ySpacing = severity === "info" ? "-space-y-1" : "";
  const rColSpan = colSpan ? `col-span-${colSpan}` : "";
  return (
    <span
      className={`${className ? className : ""} w-full ${rColSpan}
                ${
                  flow === "row"
                    ? ` space-x-${xSpacing} items-start justify-start flex flex-row`
                    : ` ${ySpacing} items-center justify-center`
                }
            `}
    >
      <span>
        <Text type={type} severity={severity}>
          {text}
        </Text>
      </span>
      <span>{children}</span>
    </span>
  );
}

Label.propTypes = {
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  severity: PropTypes.string,
  colSpan: PropTypes.number,
  children: PropTypes.node,
  flow: PropTypes.oneOf(["col", "row"]),
  xSpacing: PropTypes.number,
  type: PropTypes.string,
};

Label.defaultProps = {
  severity: "none",
  children: undefined,
  flow: "col",
  type: "label",
};
