import React from "react";
import PropTypes from "prop-types";

import { useField, useFormikContext } from "formik";
import Text from "../atoms/Text";
import Checkbox from "../atoms/Checkbox";

export default function CoreCheckbox({
  colSpan,
  className,
  onDataChange,
  ...props
}) {
  const [field, meta, helpers] = useField(props);
  const { setFieldValue } = useFormikContext();
  const { value } = meta;
  const { setValue } = helpers;
  return (
    <span className={colSpan ? `${className} col-span-${colSpan}` : className}>
      <Checkbox
        {...field}
        checked={value}
        onChange={(val) => {
          setValue(val);
          if (onDataChange) onDataChange(val, setFieldValue);
        }}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Text severity="error" type="label">
          {meta.error}
        </Text>
      ) : (
        <Text severity="error" type="label">
          &nbsp;
        </Text>
      )}
    </span>
  );
}

CoreCheckbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  colSpan: PropTypes.number,
};
