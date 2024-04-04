import React, { useState } from 'react'

export default function Ex3() {
    const [result, setResult] = useState([])
    const repeatString = () => {
        const string = document.getElementById("stringEx3")
        const copiedStrings = new Array(10).fill(string.value);
        setResult(copiedStrings.join(" "))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>3.Sao chép chuỗi 10 lần</div>
      <input style={{height: "30px", width: "300px"}} id="stringEx3" type="text" placeholder='Chuỗi ban đầu'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={repeatString}>Sao chép</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
