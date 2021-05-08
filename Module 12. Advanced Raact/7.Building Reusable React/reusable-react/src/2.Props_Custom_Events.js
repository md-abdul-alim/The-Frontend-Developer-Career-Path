import React from 'react';
import ReactDOM from 'react-dom';

// const reactElement = <div className="fish">Heellllooooo</div>

const Button = ({onClick, children }) => {
    return <button onClick={onClick}>{children}</button>
}
const ButtonOnKeyboardTab = ({onKeyboardTap, children }) => {
    return <button onClick={onKeyboardTap}>{children}</button>
}
const ButtonOnEnter = ({onEnter, children }) => {
    return <button onKeyDown={(event)=>{
        if(event.key =="Enter"){
            onEnter()
        }
    }}>{children}</button>
}

const ButtonCustomProps = ({onKeyboardTap, children, ...props }) => {
    return <button {...props} onKeyDown={(event)=>{
        if(event.key =="Enter"){
            onKeyboardTap()
        }
    }}>{children}</button>
}

const domElement = document.getElementById('customEventsAndProps')

ReactDOM.render(
    <div>
      <Button onClick={()=>{
          alert("Clicked!")
      }}>
        Click
      </Button>

      <ButtonOnKeyboardTab onKeyboardTap={()=>{
          alert("On keyboard Tab")
      }}>
        On keyboard tab
      </ButtonOnKeyboardTab>

      <ButtonOnEnter onEnter={()=>{
          alert("Enter")
      }}>
        ButtonOnEnter
      </ButtonOnEnter>

      <ButtonCustomProps onKeyboardTap={()=>{
          alert("On keyboard Tab")
        }}
        onClick={()=>{
            alert("Custom Props")
        }}
      >
        Custom Props
      </ButtonCustomProps>
    </div>, domElement)