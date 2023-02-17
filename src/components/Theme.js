
import Switch from '@mui/material/Switch';
import React from "react";
const Theme = ({ ThemeChange, setTheme }) => {

  const handleTheme = (event) => {
    console.log("ff");
    setTheme(!ThemeChange);
  };
  return (
    <div className="theme">
  <Switch
  checked={ThemeChange}
  onChange={handleTheme}
  inputProps={{ 'aria-label': 'controlled' }}
  size="big"
  color="default"

/>
  </div>
  );
};
export default Theme;

