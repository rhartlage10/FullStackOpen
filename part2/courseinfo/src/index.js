import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
  return(
    <div> 
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h3>{course.name}</h3>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, ex) => acc + ex.exercises, 0)

  return(
    <p><strong>Number of exercises {sum}</strong></p>
  ) 
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    course.parts.map((part) => <Part key={part.id} part={part}/>)
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h2>Web Development Curriculum</h2>
      {courses.map(course => <Course key={course.id} course={course} />)}
      {/* <Total course={course} /> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))