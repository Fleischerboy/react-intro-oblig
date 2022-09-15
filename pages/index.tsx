import type { NextPage } from "next";
import MyComponent from "../components/MyComponent";
import Title from "../components/Title";
import Wrapper from "../components/Wrapper";

const Home: NextPage = () => {
 return <>
     <MyComponent title="It works!"/>
     <Wrapper><Title title="test"/></Wrapper>
     <Wrapper><MyComponent title="testing wrapping children between my wrapper component"/><Title title="test"/><Title title="test"/></Wrapper>

  </>

};

export default Home;
