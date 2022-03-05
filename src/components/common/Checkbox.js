import React from 'react'
import { Checkbox } from '@mui/material'
import { makeStyles } from '@mui/material'
import { FormControlLabel } from '@mui/material'

//ngestyle checkboxnya
const useStyles = makeStyles({
    root: {
        '&$checked': {
          color: '#000',
        }, 
    }, 
    checked: {},
    wrap: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 0,
    },
    label: {
        fontSize: '.8rem',
        fontFamily: `'Raleway', sans-serif`,
    },
});

export const CheckboxButton = ({ location, changeChecked }) => {
  
    const classes = useStyles();
    const { checked, label, id } = location;

    return (
        <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ 'aria-label': 'checkbox with small size' }}
          />
        }
        label={label}
      />
    </div>
    );
};
