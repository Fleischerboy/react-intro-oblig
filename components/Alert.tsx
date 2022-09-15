import { useState } from "react";

const Alert = (props: { updateInputValue: any; updateIsClicked: any; isClickedState: boolean }) => {
  const { updateInputValue, updateIsClicked, isClickedState } = props;
  const [inputValue, setInputValue] = useState(""); //(reminder to my self) default state is ""

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // alert("input value is: " + inputValue);
    updateIsClicked(!isClickedState)

  }

  const handleChange = (event: any) => {
    setInputValue(event.target.value)

    console.log("prev state value is:, ", inputValue)
    console.log("Current state value is: ", event.target.value)
  }


  return <>
    <button onClick={handleClick}>Click me!</button>
    <input value={updateInputValue(inputValue)} type="text" onChange={handleChange}></input>


  </>

}


export default Alert;