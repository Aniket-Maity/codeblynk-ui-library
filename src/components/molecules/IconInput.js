import React from 'react'
import PropTypes from 'prop-types'
import Text from '../atoms/Text'
import Label from '../atoms/Label'
import Input from '../atoms/Input'
import { useField, useFormikContext } from 'formik'
export default function IconInput({
  label,
  onDataChange,
  colSpan,
  iconPre,
  iconPost,
  ...props
}) {
  const [field, meta, helpers] = useField(props)
  const { setFieldValue } = useFormikContext()
  return (
    <Label text={label} colSpan={colSpan}>
      <span className='flex flex-col'>
        <div className='flex flex-row'>
          {iconPre && <div>{iconPre}</div>}
          <Input
            {...field}
            onChange={(e) => {
              helpers.setValue(e.target.value)
              if (onDataChange) {
                onDataChange(e.target.value, setFieldValue)
              }
            }}
            {...props}
          />
          {iconPost && <div>{iconPost}</div>}
        </div>

        {meta.touched && meta.error ? (
          <Text severity='error' type='label'>
            {meta.error}
          </Text>
        ) : (
          <Text severity='error' type='label'>
            &nbsp;
          </Text>
        )}
      </span>
    </Label>
  )
}
