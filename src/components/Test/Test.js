import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Aux from '../../hoc/Auxiliary';
import classes from './Test.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NextButton from '../NextButton';

const Test = () => {

    const items = ['Academic Test', 'Interest Test', 'Work Style', 'Skill Set']
    return (

        <Aux>
            <div className={classes.main}>

                <div className={classes.btn}>
                    <h1 className={classes.heading}>Conduct Test</h1>
                    <h5>Following Tests will be conduted</h5>
                    <ul className={classes.list}>
                        {items.map(i =>
                            <li>
                                <p className={classes.items}>{i}</p>
                            </li>)}
                    </ul>

                    <NextButton to='/Test/Academic' text='Start Test' />
                </div>

            </div>
        </Aux>

    )
}
export default Test;