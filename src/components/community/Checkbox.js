import React from 'react'
import { Checkbox } from 'antd'
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components'

export const CheckBoxContainer = styled.div`

.ant-checkbox-inner {
  border-radius: 100%;
  width: 20px;
  height: 20px;
}
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #829C5F;
  border-color: #829C5F;
}   
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus+.ant-checkbox-inner {
  border-color: #829C5F !important;
}
`

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

export const CheckboxButton = ({ animal, changeChecked }) => {
    const classes = useStyles();
    const { checked, label, id } = animal;
    return (
        <div>
        <FormControlLabel
          classes={{
            label: classes.label,
            root: classes.wrap,
          }}
          control={
          <CheckBoxContainer>
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
            </CheckBoxContainer>
          }
          label={label}
        />
      </div>
  )
}
