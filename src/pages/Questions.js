import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MatchingQuestion from '../components/MatchingQuestion'
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion'

const Questions = () => {
  const navigate = useNavigate()
  const questions = useSelector(state => state.questions.questions)

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
          <div>
            <p>Grade</p>
            <p>Grade 1</p>
          </div>
          <div>
            <p>Course</p>
            <p>Biology</p>
          </div>
          <div>
            <p>Subject area</p>
            <p>Science</p>
          </div>
          <div>
            <p>Amount of Time to Complete the Exam </p>
            <p>180 minutes</p>
          </div>
        </div>
        <h4>Questions ({questions.length})</h4>
        <button onClick={() => navigate('add-question')}>Add Question</button>
        <ul>
          {questions.map((question, index) =>
            question.type === 'multiple_choice' ? (
              <MultipleChoiceQuestion key={question.id} question={question} index={index} />
            ) : (
              <MatchingQuestion key={question.id} question={question} index={index} />
            )
          )}
        </ul>
      </div>
      <div>
        <p>Assigned Teachers</p>
        <input type="text" />
        <button>Assign To Class</button>
      </div>
    </div>
  )
}

export default Questions
