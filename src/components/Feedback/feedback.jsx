import css from "./feedback.module.css"
export default function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
    return (
        <ul className={css.feedbackList}>
            <li className={css.listItem}><p><span className={css.listSpan}>😁Good:</span> {good}</p></li>
            <li className={css.listItem}><p><span className={css.listSpan}>😐Neutral: </span>{neutral}</p></li>
            <li className={css.listItem}><p><span className={css.listSpan}>😔Bad:</span> {bad}</p></li>
            <li className={css.listTotal}><p>Total: {totalFeedback}</p></li>
            <li className={css.listItem}><p><span className={css.listSpan}>🤩Positive🤩:</span> {positiveFeedback}%</p></li>
        </ul>
    )
}