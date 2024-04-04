import React, { useState } from 'react'

export default function Ex12() {
    const [result, setResult] = useState(0)
    var check = (number) => {
            for(let i = 2; i <= Math.sqrt(number); i++) {
                if( number % i == 0){
                    return false;
                }
            }
            return true
        
    }
    const sum = () => {
        var sum2 = 0
        var number1 = parseInt(document.getElementById("number12").value, 10)
        for(let i = 2; i <= number1; i++){
            if(check(i) == true) sum2 = sum2 + i
        }
        setResult(sum2)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>12.Tính tổng số nguyên tố nhỏ hơn n</div>
      <input style={{height: "30px", width: "300px"}} id="number12" type="number" placeholder='Nhập số'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={sum}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
  }
