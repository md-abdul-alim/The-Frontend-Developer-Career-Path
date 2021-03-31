import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
function MyApp(){
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <ol>
        <li>1</li>
      </ol>
    </div>
  )
}
ReactDOM.render(
  <MyApp/>,
  document.getElementById("root")
)
