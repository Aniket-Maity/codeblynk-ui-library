import React from "react";
import PropTypes from "prop-types";
import Text from "../atoms/Text";
import Label from "../atoms/Label";
import { useField, useFormikContext } from "formik";
import Select from "../atoms/Select";

export default function CoreSelect({
  label,
  onDataChange,
  colSpan,
  customSelectText,
  ...props
}) {
  const [field, meta, helpers] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <Label text={label} colSpan={colSpan}>
      <span className="flex flex-col">
        <Select
          {...field}
          onChange={(e) => {
            helpers.setValue(e.target.value);
            if (onDataChange) {
              onDataChange(e.target.value, setFieldValue);
            }
          }}
          {...props}
          customSelectText={customSelectText}
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
    </Label>
  );
}

CoreSelect.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onDataChange: PropTypes.func,
  colSpan: PropTypes.number,
  flat: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password", "date", "number", "file", "email"])
    .isRequired,
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),
  name: PropTypes.string.isRequired,
};
CoreSelect.defaultProps = {
  type: "text",
};
