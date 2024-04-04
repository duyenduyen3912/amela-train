import React, { useState } from 'react'

export default function Ex13() {
    const [result, setResult] = useState(0)
   
    const check = () => {
        var number1 = parseInt(document.getElementById("number13").value, 10)
        var sum2 = 0
        for(let i = 1; i <= number1/2; i++){
            if(number1 % i === 0) sum2 = sum2 + 1
        }
        setResult(sum2)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>13.Tính tổng ước số nhỏ hơn n</div>
      <input style={{height: "30px", width: "300px"}} id="number13" type="number" placeholder='Nhập số'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={check}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
  }
