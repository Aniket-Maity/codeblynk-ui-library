import React from 'react'
import Input from './Input'
import Text from './Text'
export default function InputField({ ...props }) {
  let { label } = props
  return (
    <div>
      {label && <Text type='label'>{label}</Text>}
      <Input
        {...{
          props
        }}
      />
    </div>
  )
}

InputField.defaultProps = {
  type: 'text'
}
