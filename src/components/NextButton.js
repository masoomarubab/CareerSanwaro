import classes from './NextButton.module.css';
import { Link, useNavigate } from 'react-router-dom';


export default function NextButton({ to, text }) {

    let navigate = useNavigate();

    const onNext = () => {
        navigate(to, { replace: true })
    }

    return <div className={classes.nextBtn} onClick={onNext}>
        <Link to={to} className={classes.nextBtnLink}> {text ? text : 'Next'} </Link>
    </div>
}