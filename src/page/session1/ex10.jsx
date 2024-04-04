import React, { useState } from 'react'

export default function Ex10() {
    const [result, setResult] = useState(0)
    const sum = () => {
        var number1 = parseInt(document.getElementById("number101").value, 10)
        var number2 = parseInt(document.getElementById("number102").value, 10)
        var sum2 = 0
        ++number1
        for(let i = number1; i < number2; i++){
            sum2 = sum2 + i;
        }
        setResult(sum2)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>10.Tính tổng các số giữa hai số</div>
      <input style={{height: "30px", width: "300px"}} id="number101" type="number" placeholder='Số thứ nhất'/>
      <input style={{height: "30px", width: "300px", marginLeft:"20px"}} id="number102" type="number" placeholder='Số thứ 2'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={sum}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
