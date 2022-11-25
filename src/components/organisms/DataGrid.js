import React from 'react'
import Label from '../atoms/Label'
import Grid from '../molecules/Grid'
import GridItem from '../molecules/GridItem'

export default function DataGrid(props) {
  let { data, flow, repeat, gap, gapX, gapY } = props
  return (
    <Grid {...{ flow, repeat, gap, gapX, gapY }}>
      {data.map(({ label, value, colSpan }, idx) => (
        <div key={idx}>
          <Label colSpan={colSpan} text={label}>
            <GridItem>{value}</GridItem>
          </Label>
        </div>
      ))}
    </Grid>
  )
}
