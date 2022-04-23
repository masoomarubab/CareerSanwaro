import Aux from '../../hoc/Auxiliary'
import classes from './NavBar.module.css'

const navbar = () => {
    return(
        <Aux>
        <nav className={classes.navbar}>
            <ul>
                <li className={classes.logo}><a href="#"></a>CareerSanwaro</li>
                {/* <li className={classes.listItem1}><a href="#" className={classes.link}>Take Test</a></li>
                <li className={classes.listItem2}><a href="#" className={classes.link}>Register</a></li>
                <li className={classes.listItem3}><a href="#" className={classes.link}>Login</a></li> */}
            </ul>
        </nav>
    </Aux>
    )
}

export default navbar;