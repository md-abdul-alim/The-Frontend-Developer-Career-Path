
import React from "react"
import Header from './components/functionComponents/FunctionHeader'
import MainContent from './components/functionComponents/MainContent'
import TodoItem from './components/functionComponents/TodoItem'
import todoData from './data/todoData';
import ContactCard1 from './components/functionComponents/ContactCard1'
import ContactCard2 from './components/functionComponents/ContactCard2'
import Joke from './components/functionComponents/Joke';
import jokesData from './data/jokesData'
import productData from './data/vschoolProducts';
import Product from './components/functionComponents/Product'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex
function FunctionApp(){
  /*const nums = [1,2,3,4,5,6,7,8,9,10]
  // Higher Order Method
  const doubled = nums.map(function(nums){
    return nums*2
  })
  console.log(doubled)*/

  /*jokesData.map(joke =>{
    return(
      <Joke question={joke.question} punchLine={joke.punchLine}/>
    )
  })*/
  //OR : same task by error function
  // const jokeComponents = jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine}/>)
  ////There is a error of unique key.To solve that issue we will provide unique key
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)

  //Product
  const productComponents = productData.map(item => <Product key={item.id} product={item}/>)

  //ToDoItem
  const todoItems = todoData.map(item => <TodoItem key={item.id} item = {item}/>)
  return(
    <div>
      <Header/>

      {/* <div>
        {productComponents}
      </div> */}

      {/* <div>
        {jokeComponents}
      </div> */}
      {/* <div>
          <Joke question="What's your name?" />
          <Joke 
              question="What's the best thing about Switzerland?" 
              punchLine="I don't know, but the flag is a big plus!"
          />
      </div> */}

      {/* <div className="contacts">
        <ContactCard1 
          name="Mr. Whiskerson" 
          imgUrl="http://placekitten.com/400/200" 
          phone="(212) 555-1234" 
          email="mr.whiskaz@catnap.meow"
        />
        <ContactCard2 
          contact={{name: "Mr. Whiskerson",
          imgUrl: "http://placekitten.com/300/200",
          phone: "(212) 555-1234", 
          email: "mr.whiskaz@catnap.meow"}}
        />
      </div> */}


      {/* <MainContent/> */}

      {/* <div className="todo-list">
        {todoItems}
      </div> */}
    </div>
  )
}

export default FunctionApp
