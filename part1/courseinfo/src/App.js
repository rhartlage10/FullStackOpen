import React from "react"

// takes care of rendering the name of the course
const Header = (props) => {
  console.log(props)
  return (
    <h3>{props.course}</h3>
  )
}

// renders the name and number of exercises of one part
const Part = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>  
  )
}

// renders the parts 
const Content = (props) => {
  return (
    <div>
      <Part part1={props.part1.name} exercises1={props.part1.exercises} />
      <Part part2={props.part2.name} exercises2={props.part2.exercises} />
      <Part part3={props.part3.name} exercises3={props.part3.exercises} />
    </div>
  )
}

// renders the total number of exercises
const Total = (props) => {
  return (
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App
