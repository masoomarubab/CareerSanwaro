 import classes from './LandingPage.module.css';
 import Aux from '../hoc/Auxiliary';
 import NavBar from '../components/navBar/NavBar';
 import FrontPage from '../components/FrontPage/FrontPage';

 const landingpage = () => {
     return(
        <Aux>
            <div className={classes.landingPage}>
                <NavBar />
                <FrontPage />
            </div>
            
        </Aux>
     )
   
 }

 export default landingpage;