export default function Feedback({good, neutral, bad}) {
    return (
        <div>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
        </div>
    )
}