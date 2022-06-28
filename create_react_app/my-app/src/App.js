
import {useState, useEffect} from "react"


// 아래와 같은 코드는 state가 변화할 때 모든 component가 다시 실행
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onChange = (event) => setKeyword(event.target.value)
  const onClick = () => setValue((prev) => prev + 1)
  console.log("i run all the time")


  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.")
  // }
  // useEffect(iRunOnlyOnce, [])
  useEffect(()=>{
    console.log("I run only once")
  }, [])
  useEffect(()=> {
      console.log("I run when 'keyword' changes." )
    }, [keyword])
  // keyword가 변화할 때 브라우저에 console.log를 찍어줌
  // keyword는 state에 있고, 
  // 이 keyword는 setKeyword 라는 function으로 인해 변화
  // setKeyword는 onChange라는 funtion에 의해 호출
  // onChange는 사용자 input이 변화할 때 호출

  useEffect(()=> {
    if (keyword !== "" & keyword.length > 5){
      console.log("SEARCH FOR", keyword)
    }
    // keyword가 변화할때만 실행하고 싶어!
  }, [keyword])
  useEffect(()=> {
    console.log("I run when 'counter' changes." )
  }, [counter])
  useEffect(()=> {
    console.log("I run when 'counter' & 'keyword' changes." )
  }, [counter, keyword])


  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button
        onClick = {onClick}
      > Click me !</button>
    </div>
  );
}

export default App;
