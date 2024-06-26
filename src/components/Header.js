import React from 'react';
import Button from './Button';
import "../index.css";
const Header = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="header">
          <h2 className="app-header">ToDo List App</h2>
          <Button onClick={showForm} color={changeTextAndColor ? 'red' : '#0056b3'} text={changeTextAndColor ? 'Close' : 'Add'} />
        </header>
    )
}
export default Header;