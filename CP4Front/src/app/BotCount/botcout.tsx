<<<<<<< HEAD
'use client'
import { useEffect, useState } from "react";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";


export default function CountBot() {
  const [count, setCount] = useState(0);



  useEffect(() => {
    document.title = `Contador: ${count}`
  }, [count])


  return (
    <>
      <ThemeProvider>

      <h1>Aumentar a quantidade de produto</h1>
      <button className="w-[80] h-[30] bg-amber-300 mr-10" onClick={() => { setCount(count + 1) }} disabled={count > 10}>Incrementar</button >
      <hr />
      <button className="w-[80] h-[30] bg-amber-300 mr-10" onClick={() => { setCount(count - 1) }} disabled={count == 0}>Decrementar</button>
      <p>Contador: {count}</p>

      

    </ThemeProvider>

    </>
  );
=======
'use client'
import { useEffect, useState } from "react";
import { ThemeProvider } from "../ThemeProvider/ThemeProvider";


export default function CountBot() {
  const [count, setCount] = useState(0);



  useEffect(() => {
    document.title = `Contador: ${count}`
  }, [count])


  return (
    <>
      <ThemeProvider>

      <h1>Aumentar a quantidade de produto</h1>
      <button className="w-[80] h-[30] bg-amber-300 mr-10" onClick={() => { setCount(count + 1) }} disabled={count > 10}>Incrementar</button >
      <hr />
      <button className="w-[80] h-[30] bg-amber-300 mr-10" onClick={() => { setCount(count - 1) }} disabled={count == 0}>Decrementar</button>
      <p>Contador: {count}</p>

      

    </ThemeProvider>

    </>
  );
>>>>>>> 788b1942779dbf5ee9c8610667bdb1171612ecee
}