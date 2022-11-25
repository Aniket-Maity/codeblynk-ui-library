import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Checkbox({
  label,
  checked,
  onChange,
  className,
  labelClassName,
  ...props
}) {
  const [isChecked, setChecked] = useState(checked);
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  return (
    <div className="flex flex-row space-x-2 items-start">
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            onChange(!isChecked);
            setChecked(!isChecked);
          }}
          className={`${className} cursor-pointer rounded text-secondary`}
          {...props}
        />
      </div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  checked: PropTypes.bool,
};
Checkbox.defaultProps = {
  checked: false,
};
