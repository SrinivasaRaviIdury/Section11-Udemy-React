import React, { Fragment } from 'react';
import './style.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
export default function App() {
  
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
