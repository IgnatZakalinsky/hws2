import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {

  const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (props.onChange) {
        props.onChange(event, newValue, activeThumb);
    }
  };

  return (
    <Slider
      sx={{
        color: '#3f51b5',
        '& .MuiSlider-rail': {
          height: 6,
          borderRadius: 10,
        },
        '& .MuiSlider-track': {
          height: 6,
          borderRadius: 10,
        },
        '& .MuiSlider-thumb': {
          width: 20,
          height: 20,
          marginTop: -7,
          marginLeft: -10,
          borderRadius: '50%',
          backgroundColor: '#fff',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.5)',
          },
        },
        '& .MuiSlider-thumb.Mui-active': {
          backgroundColor: "activeThumb",
        },
      }}
      onChange={handleChange}
      {...props}
    />
  );
}

export default SuperRange

