import Aux from '../../../hoc/Auxiliary';
import classes from './WorkStyle.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NextButton from '../../NextButton';
const WorkStyle =() =>{
    return(
        <Aux>
        <div className={classes.main}>
            <div className={classes.formpage}>
                <form action="#">
                  <div className={classes.title}>Work Style</div>
                  <div className={classes.subtitle}>Rate how closely each style of work matches your own personality:</div>
                    <label className={classes.question}> Attention to Detail: Careful about detail and thorough in completing work tasks</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}> Integrity: Being honest and ethical</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}> Initiative: Taking on responsibilities and challenges</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}> Dependability: Reliable, Responsible, and Dependable</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}>Persistence: Not giving up in the face of obstacles</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.Skills}> Cooperation: Being pleasant with others and displaying a good-natured, cooperative attitude</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.Skills}> Adaptability: Open to change (positive or negative) and to considerable variety in the workplace</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.Skills}>Leadership: Willingness to lead, take charge, and offer opinions and direction</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}> Analytical Thinking: Analyzing information and using logic to address issues and problems</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}>   Independence: Completing tasks with little or no supervision</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}>  Stress Tolerance: Accepting criticism and dealing calmly and effectively with high stress situations</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}> Innovation: Using creativity and alternative thinking to develop new ideas</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}> Self Control: Keeping emotions in check, controlling anger, and avoiding aggressive behavior</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}> Concern for Others: Being sensitive to others' needs and feelings</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <label className={classes.question}>  Sociability: Preferring to work with others rather than alone</label>
                    <div className={classes.choice}>
                    <input type="radio" name="workstyle" value ="None"/> None
                    <input type="radio" name="workstyle" value ="Low" />Low
                    <input type="radio" name="workstyle" value ="Average" />Average
                    <input type="radio" name="workstyle" value ="High" />High
                    <input type="radio" name="workstyle" value ="Very High" />Very High
                    </div>
                    <NextButton to='/Test/Academic/Interest/WorkStyle/SkillSet' />
                </form>
                </div>
                </div>
        </Aux>
    )

}

export default WorkStyle;