import React, { useState } from 'react'

export default function Ex1() {
  document.title = "Bài 1"
  const [result, setResult] = useState('false')
  const checkStringExit = () => {
    const string1 = document.getElementById("string1")
    const string2 = document.getElementById("string2")
    const regex = new RegExp('\\b' + string2.value + '\\b', 'i');
    const resultCompare = regex.test(string1.value)
    setResult(`${resultCompare}`)
  }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>1.Kiểm tra chuỗi trùng</div>
      <input style={{height: "30px", width: "300px"}} id="string1" type="text" placeholder='Chuỗi ban đầu'/>
      <input style={{height: "30px", width: "300px", marginLeft: "20px"}} id="string2" type="text" placeholder='Chuỗi cần kiểm tra'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={checkStringExit}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
