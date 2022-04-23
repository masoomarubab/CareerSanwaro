import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Aux from '../../hoc/Auxiliary';
import classes from './FrontPage.module.css';
import image from '../../Assets/images/homepage.jpg';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import RegisterPage from '../RegisterPage/RegisterPage';
const frontpage = () => {
    return(
        <Aux>
            <div className={classes.frontpage}>
            <div className='container h-auto'>
            <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <img src={image} className={classes.image} alt="image"/>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <div className={classes.textDiv} >
                            <h1 > Career Sanwaro</h1>
                            <p>
                            CareerSanwaro is free career counseling system of Pakistan for the students to
                            determine their career and suggest possible programs available in Pakistan. <br/>
                            We will provide following infromation:
                            </p>
                            
                            <div id="arrow"></div>
                            <ul className={classes.list}>
                            <li>Fields of interest</li>
                            <li>Universities offereing those programs</li>
                            <li>Universities details</li>
                            </ul>
                        </div>
                        <ul className={classes.buttons}>
                            {/* <li>
                                <Link to='/'>Home</Link>
                                </li> */}
                                <li>
                                <Link to='/Register' className={classes.items}>Register</Link>
                                </li>
                                <li>
                                <Link to='/Login' className={classes.items}>Login</Link>
                                </li>
                                <li>
                                <Link to='/Test' className={classes.items}>Take Test</Link>
                                </li>
                            </ul>

                    </div>
                </div>
            </div>
                
            </div>

            
        </Aux>
    )
}


export default frontpage;