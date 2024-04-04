import React, { useState } from 'react'

export default function Ex2() {
    const [result, setResult] = useState()
    const shortenString = () => {
        const string = document.getElementById("string")
        const subString = string.value.substring(0,8)
        setResult(`${subString}...`)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>2.Rút gọn chuỗi</div>
      <input style={{height: "30px", width: "300px"}} id="string" type="text" placeholder='Chuỗi ban đầu'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={shortenString}>Rút gọn</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
