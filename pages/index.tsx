import type { NextPage } from "next";
import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Food from "../components/Food";
import MyComponent from "../components/MyComponent";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";



const Home: NextPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const foodList = ['Pizza', 'Hamburger', 'Coke']


  return <>
    <MyComponent title="It works!" />

    <Wrapper><MyComponent title="testing wrapping children between my wrapper component" /><Title title="test" /><Title title="test" /></Wrapper>
    
    <ul> {foodList.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      )
    })}
    </ul>
    <br/>
    <h3>passing food List as prop to component Food:</h3>
    <ul><Food foodList={foodList} /></ul>

    
    <Button>Click me!</Button>  
    <Button href="about">About page</Button>
    <br />
    <br />
    
  
    <Alert updateInputValue={setInputValue} isClickedState={isClicked} updateIsClicked={setIsClicked}  />
    
    {isClicked && <p>{inputValue}</p>}
    
    
   

  </>

};

export default Home;
