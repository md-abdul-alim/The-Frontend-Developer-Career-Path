import React from 'react';
import ReactDOM from 'react-dom';
import './css/1_style.css'

const domElement = document.getElementById('root')
// const reactElement = <div>Hello</div>
// const reactElement = React.createElement('div', null, 'hello')
// const reactElement = React.createElement('div', {className: 'test'}, 'hello')
// const reactElement = React.createElement('div', {className: 'test'}, (() => "hello")())
let txt = "hello"
// const reactElement = React.createElement('div', {className: 'test'}, (() => txt)())
// const reactElement = React.createElement('div', {className: 'test'}, (() => txt + "!!!")())
// const reactElement = React.createElement('div', {className: 'test'}, (() => txt + "!!!")(), "milon")
// const reactElement = React.createElement('button', {className: 'test'}, (() => txt + "!!!")(), "milon")

////This is an element
const reactElement = <button>{txt}</button>
// ReactDOM.render(reactElement, domElement)

////This is an component
const Button = () => <button>{txt}</button>
// ReactDOM.render(<div>{reactElement}</div>, domElement)
// ReactDOM.render(<div><Button/></div>, domElement)
// ReactDOM.render(<div><Button/><Button/></div>, domElement)

////Concept of props
const propsElement = document.getElementById('props')
// const AddButton = (props) => {return <button>{props.text}</button>}
////OR
// const AddButton = ({text}) => {return <button>{text}</button>}
////OR
const AddButton = (props) => {
  let {text, icon} =props
  return <button>{text}{icon}</button>
}

ReactDOM.render(
  <div>
    <AddButton text="Add" icon=" +"/>
    <AddButton text="Subtract" icon=" -"/>
  </div>, propsElement)

////Concept of Children
const childrenElement = document.getElementById('children')
const ChildrenButton = ({children}) => {
  return <button>{children}</button>
}

ReactDOM.render(
  <div>
    <ChildrenButton>
      Children
    </ChildrenButton>
    <ChildrenButton children="Multiple"/>  {/* Children is also props */}
    <ChildrenButton children={txt}/>{/* means React.createElement(Button, {children: element}) */}
  </div>, childrenElement)

////How react props, children work
    // 1) <Button children={element} />
    // 2) React.createElement(Button, { children: element })
    
    // 1) <Button>{element}</Button>
    // 2) React.createElement(Button, {}, element)
    // 3) React.createElement(Button, { children: element })

////Children props takes array too
    // <Button>
    //     {element}
    //     {element2}
    //     {stuff.map(() => {element3and4})}
    // </Button>
    
    // React.createElement(Button, {}, element, element2, [element3, element4])
    // React.createElement(Button, {children: [element, [element2, [element3, element4]})