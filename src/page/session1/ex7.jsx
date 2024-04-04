import React, { useState } from 'react'

export default function Ex7() {
    const [result, setResult] = useState([])
    const reverseString = () => {
        const string = document.getElementById("stringEx7").value
        const stringResult = string.split("").reverse().join("")
        setResult(`${string == stringResult}`)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>7.kiểm tra chuỗi đối xứng</div>
      <input style={{height: "30px", width: "300px"}} id="stringEx7" type="text" placeholder='Chuỗi ban đầu'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={reverseString}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
