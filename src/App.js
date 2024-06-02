import React, { useEffect } from 'react';
import MainComponent from './components/MainComponent';
import LeftConstant from './components/SDEConstant/LeftConstant';
import RightConstant from './components/SDEConstant/RightConstant';
import './App.css';

const App = () => {
  return (
    <div className="bg-[#000000]">
      <MainComponent LeftComponent={LeftConstant} RightComponent={RightConstant} />
    </div>
  );
};

export default App;