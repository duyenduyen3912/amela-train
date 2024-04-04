import React, { useState } from 'react'

export default function Ex7() {
    const [result, setResult] = useState()
    const sort = () => {
        const stringInput = document.getElementById("string7").value
        const stringArr = stringInput.split(" ")
        const indexRandom = Math.floor(Math.random() * stringArr.length)
        setResult(stringArr[indexRandom])
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>7.Lấy phần tử bất kỳ trong mảng</div>
      <input style={{height: "30px", width: "300px"}} id="string7" type="text" placeholder='Nhập số cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={sort}>Tìm</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
