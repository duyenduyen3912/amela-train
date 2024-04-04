import React, { useState } from 'react'

export default function Ex11() {
    const [result, setResult] = useState(0)
    const sum = () => {
        const number1 = parseInt(document.getElementById("number11").value, 10)
        if(number1 <= 1) {
           setResult(`${false}`) 
           return
        } 
        else {
            for(let i = 2; i <= Math.sqrt(number1); i++) {
                if( number1 % i == 0){
                    setResult(`${false}`)
                    return
                }
                 
            }
            setResult(`${true}`)
        } 
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>11.Kiểm tra số nguyên tố</div>
      <input style={{height: "30px", width: "300px"}} id="number11" type="number" placeholder='Nhập số'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={sum}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
