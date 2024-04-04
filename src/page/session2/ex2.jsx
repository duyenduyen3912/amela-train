import React, { useState } from 'react'

export default function Ex2() {
    const [result, setResult] = useState(0)
    const minNumber = () => {
        const numberInput = document.getElementById("number2").value
        const numArr = numberInput.split(" ").map(element => parseInt(element, 10));
        const sortArr = numArr.sort((a,b) => a - b)
        const uniqueArr = [...new Set(sortArr)]
        setResult(uniqueArr[1])
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>2.Tìm số nhỏ thứ hai</div>
      <input style={{height: "30px", width: "300px"}} id="number2" type="text" placeholder='Nhập các số viết cách nhau 1 dấu cách '/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={minNumber}>Tìm</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
