import Aux from '../../hoc/Auxiliary';
import classes from './Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Login = () => {
    return(
        <Aux>
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.title}>Login</div>
                <div className={classes.content}>
                <form action="#">
                    <div className={classes.userdetails}>
                    
                    <div className={classes.inputbox}>
                        <span className={classes.details}>Username</span>
                        <input type="text" placeholder="Enter your username" required />
                    </div>
                    <div className={classes.inputbox}>
                        <span className={classes.details}>Email</span>
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className={classes.inputbox}>
                        <span className={classes.details}>Password</span>
                        <input type="text" placeholder="Enter your password" required />
                    </div>
                    
                    </div>
                    
                    
                    <div className={classes.button}>
                    <input type="submit" value="Login" />
                    </div>
                </form>
                </div>
            </div>
            </div>
        </Aux>
    )
}

export default Login;