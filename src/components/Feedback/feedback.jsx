import css from "./feedback.module.css"
export default function Feedback({ good, neutral, bad, totalFeedback, positiveFeedback }) {
    return (
        <ul className={css.feedbackList}>
            <li className={css.listItem}><p>Good: {good}</p></li>
            <li><p>Neutral: {neutral}</p></li>
            <li><p>Bad: {bad}</p></li>
            <li><p>Total: {totalFeedback}</p></li>
            <li><p>Positive: {positiveFeedback}%</p></li>
        </ul>
    )
}