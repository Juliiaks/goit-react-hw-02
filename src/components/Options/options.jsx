
//   import { useState } from 'react';

export default function Options({updateFeedback}) {
    
// const [click, setClick] = useState(0)
  
//     const handleClick = () => {
//         setClick(click + 1)
//     }
    return(
    <>
        <button onClick={() => updateFeedback("good")} >Good</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
        <button>Reset</button>
        </>
    )
}