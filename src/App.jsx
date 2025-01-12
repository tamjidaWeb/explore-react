import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
import Book from './Book'

function App() {


  const books = [
    {id:1, name: 'physics', price: 100},
    {id:2, name: 'Chemistry', price: 120},
    {id:3, name: 'Math', price: 80},
    {id:4, name: 'Biology', price: 122},
  ]


  const actors = ['sakib', 'Shoriful Raj','Salman Shah', 'Manna', 'Jasim']
  const singers = [
    {id:1,name: 'Dr. Mahfuzur Rahman', age: 68},
    {id:2,name:'Eva Rahman', age: 38},
    {id:3,name: 'Pritom', age: 29},

  ]
  
  return (
    <>
      <h1>Vite + React</h1>

    <BookStore books={books}></BookStore>





    {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }



      <Actor name={'Bappa Raz'}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo 
      task='Learn React' 
      isDone ={true}></Todo>
      <Todo 
      task='Explore core concepts' 
      isDone={false}></Todo>
      <Todo 
      task='Try JSX' 
      isDone ={true}></Todo> */}
      {/* <Device name='Laptop' price= '55'></Device>
      <Device name='mobile' price= '17'></Device>
      <Device name='watch' price= '3'></Device>
      <Person></Person>
      <Student grade='7' score= '99'></Student>
      <Student grade={12} score= '88'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props){
  console.log(props);
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 200;
  const person = {name:'sakib', age: 12}
  return <h3>I am a {person.name} with age : {person.age}</h3>
}
const {grade, score}= {grade: '7', score: '99'}
function Student ({grade=1, score=0}){
  console.log(grade, score);
  return (
  <div className='student'>

    <h3>This is a student</h3>
    <p>Class:{grade}</p>
    <p>Score:{score}</p>

  </div>
  )
}

function Developer(){
  const developerStyle ={
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px',
  }
  return (
    <div style={developerStyle}>
      <h3>Dev </h3>
      <p>Coding:</p>
    </div>
  )
}

export default App
