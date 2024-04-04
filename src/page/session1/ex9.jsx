import React, { useState } from 'react'

export default function Ex9() {
    const [result, setResult] = useState(0)
    const reverseString = () => {
        const string = parseInt(document.getElementById("stringEx9").value, 10)
        const result = string * string * string * 3.14 * 4/3
        setResult(result.toFixed(2))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>9.Tính thể tích hình cầu</div>
      <input style={{height: "30px", width: "300px"}} id="stringEx9" type="number" placeholder='Nhập bán kính'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={reverseString}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
