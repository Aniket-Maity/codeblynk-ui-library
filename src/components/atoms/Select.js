import React from "react";
import PropTypes from "prop-types";

const Select = ({
  flat,
  size,
  className,
  placeholder,
  data,
  sort,
  customSelectText,
  ...props
}) => {
  const inputSize =
    size === "small"
      ? "w-36 h-6 text-sm"
      : size === "large"
      ? "h-7 text-lg"
      : size === "full"
      ? "w-full h-7 text-base"
      : "w-48 h-7 text-base";
  sort && data.sort((a, b) => a.label.localCompare(b.label));
  return (
    <select
      className={[
        flat ? "border-1 border-secondary" : "border-2 border-secondary",
        "rounded-sm",
        inputSize,
        // "min-w-full h-7 text-base",
        className,
      ].join(" ")}
      {...props}
    >
      <option value="" disabled={customSelectText ? false : true}>
        {customSelectText ? customSelectText : "--Select--"}
      </option>
      {data.map(({ label, value }, idx) => (
        <option key={idx} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  flat: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large", "full", "extraSmall"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.node, value: PropTypes.any })
  ),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  sort: PropTypes.bool,
  customSelectText: PropTypes.string,
};

Select.defaultProps = {
  sort: false,
};

export default Select;
