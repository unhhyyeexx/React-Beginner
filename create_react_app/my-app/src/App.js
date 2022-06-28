
import {useState, useEffect} from "react"

// 


// 아래와 같은 코드는 state가 변화할 때 모든 component가 다시 실행
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)
  console.log("i run all the time")


  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.")
  // }
  // useEffect(iRunOnlyOnce, [])
  useEffect(()=>{
    console.log("CALL THE API")
  }, [])
  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick = {onClick}
      > Click me !</button>
    </div>
  );
}

export default App;
