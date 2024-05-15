import Description from './components/Description/description'
import Feedback from './components/Feedback/feedback'
import Options from './components/Options/options'
import './App.css'
import { useState } from 'react'



function App() {

  const updateFeedback = feedbackType => {
    feedbackType = ['good', 'neutral', 'bad'].map((el) => el)
    const [click, setClick] = useState(0)
    const handleClick = () => {
        setClick(click + 1)
    }
 }
 
  const feedback = {
  good: 0,
	neutral: 0,
	bad: 0
  }  

  return (
    <>
      <Description />
      <Options  onClick={updateFeedback} />
      <Feedback
        good={updateFeedback}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
    </>
  )
}

export default App
