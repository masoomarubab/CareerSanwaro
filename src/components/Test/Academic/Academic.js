import Aux from '../../../hoc/Auxiliary';
import classes from './Academic.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import NextButton from '../../NextButton'

const Academic = () => {

  return (
    <Aux>
      <div className={classes.formpage}>
        <form action="#">
          <div className={classes.title}>Academic</div>
          <div classNameName={classes.subtitle}>Please enter correct academic details !</div>
          <label classNameName={classes.question}> What is your Qualification?</label>
          <div className={classes.choice}>
            <input type="radio" name="interest" value="ICS" /> ICS <br />
            <input type="radio" name="interest" value="Pre-Medical" />Pre-Medical <br />
            <input type="radio" name="interest" value="FSC(Medical)" />Pre-Engineering <br />
            <input type="radio" name="interest" value="Commerce" />Commerce <br />
            <input type="radio" name="interest" value="Arts" />Arts <br />
          </div>
          <div className={classes.inputcontainer}>
            <input id="marks" className={classes.input} type="text" placeholder=" " />

            <label for="marks" className={classes.placeholder}>Enter Your Marks</label>
          </div>
          <br />

          <div className={classes.inputcontainer}>
            <input id="collegename" className={classes.input} type="text" placeholder=" " />

            <label for="collegename" className={classes.placeholder}>Enter your College/University Name:</label>
          </div>

          <NextButton to='/Test/Academic/Interest' />
        </form>
      </div>
    </Aux>
  )

}

export default Academic;