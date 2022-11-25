import React from "react";
import PropTypes from "prop-types";
import Text from "../atoms/Text";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import { useField, useFormikContext } from "formik";

export default function CoreInput({ label, onDataChange, colSpan, ...props }) {
  const [field, meta, helpers] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <Label text={label} colSpan={colSpan}>
      <span className="flex flex-col">
        <Input
          {...field}
          onChange={(e) => {
            helpers.setValue(e.target.value);
            if (onDataChange) {
              onDataChange(e.target.value, setFieldValue);
            }
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
    </Label>
  );
}

CoreInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onDataChange: PropTypes.func,
  colSpan: PropTypes.number,
  flat: PropTypes.bool,
  type: PropTypes.oneOf(["text", "password", "date", "number", "file", "email"])
    .isRequired,
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),
  name: PropTypes.string.isRequired,
};
CoreInput.defaultProps = {
  type: "text",
};
