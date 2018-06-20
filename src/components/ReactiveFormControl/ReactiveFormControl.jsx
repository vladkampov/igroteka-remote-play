import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export default ({ input, meta, label, name, ...props }) => (
  <FormGroup controlId={name} validationState={meta.touched && !meta.valid && !meta.focused ? 'error' : null}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} {...props} />
    {meta.touched && !meta.valid && !meta.focused && <HelpBlock>{meta.errors[0]}</HelpBlock>}
  </FormGroup>
);
