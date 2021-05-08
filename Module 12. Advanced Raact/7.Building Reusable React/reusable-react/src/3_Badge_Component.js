import React from 'react';
import ReactDOM from 'react-dom';

// const Badge = ({children, color}) => {
//   return <span className={`badge ${color}`}>{children}</span>
// }

const Badge = ({children, color, ...props}) => {
    return <span className={`badge ${color}`} {...props}>{children}</span>
  }
  

const App = () => {
  return (
    <section>
      <h1>Check out these badges!</h1>
      <Badge color="green">Success</Badge> This is operational. <br />
      <Badge color="red">Removed</Badge> This is critical. <br />
      <Badge color="yellow">Warning</Badge> This is a warning. <br />
      <Badge color="blue" onClick={()=>{
          alert("What's up!")
      }}>Beta</Badge> This is in progress. <br />
    </section>
  )
}

const domElement = document.getElementById('root')
ReactDOM.render(<App />, domElement)