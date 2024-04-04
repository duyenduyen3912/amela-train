import React, { useState } from 'react'

export default function Ex5() {
    const [result, setResult] = useState([])
    const repeatString = () => {
        const string = document.getElementById("stringEx5")
        const number = parseInt(document.getElementById("numberEx5").value, 10)
        const copiedStrings = new Array(number).fill(string.value);
        setResult(copiedStrings.join("-"))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>5.Sao chép chuỗi n lần</div>
      <input style={{height: "30px", width: "300px"}} id="stringEx5" type="text" placeholder='Chuỗi ban đầu'/>
      <input style={{height: "30px", width: "200px", marginLeft: "20px"}} id="numberEx5" type="number" />
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={repeatString}>Sao chép</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
