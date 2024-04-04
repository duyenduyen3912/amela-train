import React, { useState } from 'react'

export default function Ex8() {
    const [result, setResult] = useState([])
    const reverseString = () => {
        const string = document.getElementById("stringEx8").value
        setResult(`${string == string.toUpperCase()}`)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>8.Kiểm tra chuỗi viết hoa</div>
      <input style={{height: "30px", width: "300px"}} id="stringEx8" type="text" placeholder='Chuỗi ban đầu'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={reverseString}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
