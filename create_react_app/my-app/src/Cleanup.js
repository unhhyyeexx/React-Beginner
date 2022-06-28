import {useState, useEffect} from "react"

// 아래 hello function이랑 같은거
// function Hello(){
//   function byeFn(){
//     console.log("bye")
//   }
//   function hiFn(){
//     console.log("created")
//     return byeFn
//   }
//   useEffect(hiFn, [])
//   return <h1>hello</h1>
// }

function Hello() {
  useEffect(() => {
    console.log("created")
    // component가 destroy될 때 실행 될 function 만들기 ; cleanup function
    return (() => console.log("destroyed"))
  }, [])
  return <h1>Hello</h1>
}


function Cleanup(){
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing(prev => !prev)
  return (
  <div>
    {showing ? <Hello></Hello> : null}
    <button
      onClick={onClick}
    >{showing ? "Hide" : "Show"}</button>
  </div>)
}

export default Cleanup;