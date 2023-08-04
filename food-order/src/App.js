import React,{useContext} from 'react';

import Content from './components/Content/Content';
import Header from './components/Header/Header';
import FoodSection from './components/FoodSection/FoodSection';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Content></Content>
      <FoodSection></FoodSection>
    </React.Fragment>
  );
}

export default App;
