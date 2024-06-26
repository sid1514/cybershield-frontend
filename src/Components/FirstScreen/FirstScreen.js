
import React from 'react';
import NavBarComp from './NavBarComp/NavBarComp';
import GreenComp from './GreenComp/GreenComp';
import GreyComp from './GreyComp/GreyComp';
import BlueComp from './BlueComp/BlueComp';
import Cara from './Carousel/Cara';
// import NavBarComp from './components/FirstScreen/NavBarComp/NavBarComp';
// import GreenComp from './components/FirstScreen/GreenComp/GreenComp';
// import GreyComp from './components/FirstScreen/GreyComp/GreyComp';
// import BlueComp from './components/FirstScreen/BlueComp/BlueComp';
// import Cara from './components/FirstScreen/Carousel/Cara';

function FirstScreen() {
  return (
    <>
      
        <NavBarComp/>
      
      <div style={{ marginTop:"1.5%", marginBottom: '20px' }}>
        <GreenComp />
      </div>
      <div style={{ marginBottom: '20px', width: '90%', marginLeft: '5%' }}>
        <GreyComp/>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <BlueComp />
      </div>
      <Cara />
      
    </>
  );

 

  

}
export default FirstScreen;
