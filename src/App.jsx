import React, { useEffect, useState } from 'react'

const App = () => {
  const [advice, setAdvice] = useState("Click Below to Get Advice");
  const [count, setCount] = useState(0);

  async function clickhandler() {
    const result = await fetch("https://api.adviceslip.com/advice");
    const data = await result.json();
    setAdvice(data.slip.advice);
    setCount((previousVlaue) => previousVlaue + 1);
  }

  useEffect(() => {
    clickhandler();
  }, [])
  
  return (
    <div className='h-[100vh] w-full flex justify-center items-center flex-col gap-4  bg-slate-400 text-white flex-wrap'>
        <h1 className='text-xl font-mono font-semibold py-2  '>{advice}</h1>
        <button onClick={clickhandler} className='bg-blue-600 py-2 px-6 w-[200px] rounded-md'>Get Advice</button>
        <p>You Got A <b className='bg-white px-2 mx-1 text-black rounded'>{count}</b> Advice</p>
      
    </div>
  )
}

export default App