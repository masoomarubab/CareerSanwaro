import { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Test from './components/Test/Test';
import Login from './components/Login/Login';
import Academic from './components/Test/Academic/Academic';
import Interest from './components/Test/Interest/Interest';
import WorkStyle from './components/Test/WorkStyle/WorkStyle';
import SkillSet from './components/Test/SkillSet/SkillSet';

class App extends Component{
  render(){
    document.title = 'CareerSanwaro'
    return(
      <BrowserRouter>
      <div>
      <Routes>
          <Route path='/' element={<LandingPage />} /> 
          <Route path='/Register' element={<RegisterPage />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Test' element={<Test />} /> 
                <Route path='/Test/Academic' element={<Academic />} /> 
                <Route path='/Test/Academic/Interest' element={<Interest />} /> 
                <Route path='/Test/Academic/Interest/WorkStyle' element={<WorkStyle />} /> 
                <Route path='/Test/Academic/Interest/WorkStyle/SkillSet' element={<SkillSet />} /> 

      </Routes>
    </div>
      </BrowserRouter>
    );
  }
}
export default App;
