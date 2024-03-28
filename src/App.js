
import './App.css';
import BenefitConatiner from './components/BenefitContainer/BenefitConatiner';
import Brands from './components/Brands/Brands';
import Frame10 from './components/Frame10/Frame10';
import Frame11 from './components/Frame11/Frame11';
import Frame4 from './components/Frame4/Frame4';
import Frame5 from './components/Frame5/Frame5';
import Frame6 from './components/Frame6/Frame6';
import Frame7 from './components/Frame7/Frame7';
import Frame8 from './components/Frame8/Frame8';
import Frame9 from './components/Frame9/Frame9';

import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
   <Header/>
   <Brands/>
   <BenefitConatiner/>
   <Frame4/>
   <Frame5/>
   <Frame6/>
   <Frame7/>
   <Frame8/>
   <Frame9/>
   <Frame10/>
   <Frame11/>
    </div>
  );
}

export default App;
