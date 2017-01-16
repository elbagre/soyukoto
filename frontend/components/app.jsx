import React from 'react';
import Header from './header/header_container'
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default App;
