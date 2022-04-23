import Aux from '../../hoc/Auxiliary';
import classes from './RegisterPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const registerPage = () => {
    return(
        <Aux>
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.title}>Registration</div>
                <div className={classes.content}>
                <form action="#">
                    <div className={classes.userdetails}>
                    <div className={classes.inputbox}>
                        <span className={classes.details}>Full Name</span>
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div class={classes.inputbox}>
                        <span className={classes.details}>Username</span>
                        <input type="text" placeholder="Enter your username" required />
                    </div>
                    <div className={classes.inputbox}>
                        <span className={classes.details}>Email</span>
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className={classes.inputbox}>
                        <span className={classes.details}>Phone Number</span>
                        <input type="text" placeholder="Enter your number" required />
                    </div>
                    <div className={classes.inputbox}>
                        <span className={classes.details}>Password</span>
                        <input type="text" placeholder="Enter your password" required />
                    </div>
                    <div className={classes.inputbox}>
                        <span className={classes.detail}>Confirm Password</span>
                        <input type="text" placeholder="Confirm your password" required />
                    </div>
                    </div>
                    
                    
                    <span className={classes.gendertitle}>Gender</span>
                    <div className={classes.category}>
                    <input type="radio" name="gender" value ="Male"/> Male
                   
                    <input type="radio" name="gender" value ="Female" />Female
                    <input type="radio" name="gender" value ="Prefer not to say" />Prefer not to say
                    
                    </div>
                    <div className={classes.button}>
                    <input type="submit" value="Register" />
                    </div>
                </form>
                </div>
            </div>
            </div>
        </Aux>
    )
}

export default registerPage;