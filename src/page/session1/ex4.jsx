import React, { useState } from 'react'

export default function Ex4() {
    const [result, setResult] = useState([])
    const repeatString = () => {
        const string = document.getElementById("stringEx4")
        const copiedStrings = new Array(10).fill(string.value);
        setResult(copiedStrings.join("-"))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>4.Sao chép chuỗi và cách nhau "-"</div>
      <input style={{height: "30px", width: "300px"}} id="stringEx4" type="text" placeholder='Chuỗi ban đầu'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={repeatString}>Sao chép</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
