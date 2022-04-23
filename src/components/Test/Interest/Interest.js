import Aux from '../../../hoc/Auxiliary';
import classes from './Interest.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NextButton from '../../NextButton';

const Interest =() =>{
    return(
        <Aux>
            <div className={classes.formpage}>
                <form action="#">
                  <div className={classes.title}>Interest</div>
                  <div className={classes.subtitle}>Rate your interest level in the following subjects and activities:</div>
                    <label className={classes.question}> Art: Painting, Drawing and Sculpture</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Business: Economics, Finance and Marketing</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Law: Legal and Criminal Justice</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Computers: Programming and Information Technology</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Science: Math, Physics and Technology</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>
                    <label className={classes.Skills}> Medical: Biology and Health Care</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>
                    <label className={classes.Skills}> Culinary: Food and Drinks</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>
                    <label className={classes.Skills}> Construction: Working with your Hands</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Office: Working in an Office Environment</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Outdoors: Working Outside of an Office</label>
                    <div className={classes.choice}>
                    <input type="radio" name="interest" value ="Hate It"/> Hate It
                    <input type="radio" name="interest" value ="Neutral" />Neutral
                    <input type="radio" name="interest" value ="Like It" />Like It
                    <input type="radio" name="interest" value ="Love It" />Love It
                    </div>

                    <NextButton to='/Test/Academic/Interest/WorkStyle' />

                </form>
            </div>
        </Aux>
    )

}

export default Interest;