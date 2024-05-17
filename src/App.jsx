import Description from './components/Description/description'
import Feedback from './components/Feedback/feedback'
import Options from './components/Options/options'
import './App.css'
import { useState } from 'react'
import Notification from './components/Notification/notification'



function App() {

const [click, setClick] = useState({
  good: 0,
	neutral: 0,
	bad: 0
})
  
  const updateFeedback = (feedbackType) => {
    setClick({
      ...click,
      [feedbackType]: click[feedbackType] + 1
    });
  }
  
  const totalFeedback = click.good + click.neutral + click.bad;
  
  

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback} />
      
    {totalFeedback === 0 ? (<Notification/>):(<Feedback
        good={click.good}
        neutral={click.neutral}
        bad={click.bad}/>)}
        
      

    </>
  )
  
}

export default App
