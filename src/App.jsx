import Description from './components/Description/description'
import Feedback from './components/Feedback/feedback'
import Options from './components/Options/options'
import './App.css'
import { useState, useEffect } from 'react'
import Notification from './components/Notification/notification'



function App() {

const [click, setClick] = useState(() => {
const savedClick = window.localStorage.getItem("saved-click");
if(savedClick !== null){
  return JSON.parse(savedClick);
}
return {good: 0,
	neutral: 0,
	bad: 0}
});
  
const updateFeedback = (feedbackType) => {
    setClick({
      ...click,
      [feedbackType]: click[feedbackType] + 1
    });
  }

  const resetFeedback = () => {
   setClick({
    good: 0,
	neutral: 0,
	bad: 0
   })
  }
  
  const totalFeedback = click.good + click.neutral + click.bad;
  const positiveFeedback = Math.round((click.good / totalFeedback) * 100);

  useEffect(() => {
  window.localStorage.setItem("saved-click",  JSON.stringify(click))
},[click]);
  

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback} 
        totalFeedback={totalFeedback}/>
      
    {totalFeedback === 0 ? (<Notification/>):(<Feedback
        good={click.good}
        neutral={click.neutral}
        bad={click.bad}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}/>)}
        
      

    </>
  )
  
}

export default App
