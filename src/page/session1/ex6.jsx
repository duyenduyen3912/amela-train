import React, { useState } from 'react'

export default function Ex6() {
    const [result, setResult] = useState([])
    const reverseString = () => {
        const string = document.getElementById("stringEx6").value
        const stringResult = string.split("").reverse().join("")
        setResult(stringResult)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>6.Đảo ngược chuỗi</div>
      <input style={{height: "30px", width: "300px"}} id="stringEx6" type="text" placeholder='Chuỗi ban đầu'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={reverseString}>Đảo ngược</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
