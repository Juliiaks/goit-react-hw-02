
import css from "./options.module.css"

export default function Options({updateFeedback, resetFeedback, totalFeedback}) {
    
    return(
    <div className={css.container}>
        <button className={css.feedbackBtn} onClick={() => updateFeedback("good")} >😁Good</button>
        <button className={css.feedbackBtn} onClick={() => updateFeedback("neutral")}>😐Neutral</button>
        <button className={css.feedbackBtn} onClick={() => updateFeedback("bad")}>😔Bad</button>
        <button className={css.resetBtn} onClick={resetFeedback} hidden={totalFeedback===0}>Reset</button>
        </div>
    )
}