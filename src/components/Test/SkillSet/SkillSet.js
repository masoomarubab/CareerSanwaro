import Aux from '../../../hoc/Auxiliary';
import classes from './SkillSet.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const SkillSet =() =>{
    return(
        <Aux>
             <div className={classes.formpage}>
                <form action="#">
                  <div className={classes.title}>Skills</div>
                    <label className={classes.question}> Reasoning and Problem Solving</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Management : Planning, Proper use of Time and Resources</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Interaction with others</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Ability to Train and Counsel</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}>Working with Tools and Equipment</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
                    <label className={classes.Skills}> Communication Skills: Listening, Speaking</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Love Listening others "/> Love Listening others 
                    <input type="radio" name="skills" value ="Love to Speak" />Love to Speak
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Hate Both" />Hate Both
                    </div>
                    <label className={classes.Skills}> Team Work </label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
                    <label className={classes.Skills}>Decission Making</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}> Focus on the Problem</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}>  Working with New Ideas, Creative Thinking</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
                    <label className={classes.question}>  How physicaly strong you are?</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Weak"/> Weak
                    <input type="radio" name="skills" value ="Normal" />Normal
                    <input type="radio" name="skills" value ="Strong" />Strong
                    <input type="radio" name="skills" value ="Very Strong" />Very Strong
                    </div>
                    <label className={classes.question}> Do you Like Spending Time on Computer</label>
                    <div className={classes.choice}>
                    <input type="radio" name="skills" value ="Hate It"/> Hate It
                    <input type="radio" name="skills" value ="Neutral" />Neutral
                    <input type="radio" name="skills" value ="Like It" />Like It
                    <input type="radio" name="skills" value ="Love It" />Love It
                    </div>
              
                    {/* <div className={classes.button}>
                    <input type="button" value="Next" />
                    </div> */}
                </form>
            </div>
        </Aux>
    )

}

export default SkillSet;