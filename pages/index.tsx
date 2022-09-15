import type { NextPage } from "next";
import MyComponent from "../components/MyComponent";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";



const Home: NextPage = () => {

  const food = ['Pizza', 'Hamburger', 'Coke']
  return <>
    <MyComponent title="It works!" />
    <Wrapper><MyComponent title="testing wrapping children between my wrapper component" /><Title title="test" /><Title title="test" /></Wrapper>

    <ul> {food.map((item, index) => {
      return (
        <li key={index}>{item}</li>
      )
    })}
    </ul>

  </>

};

export default Home;
