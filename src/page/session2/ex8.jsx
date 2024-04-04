import React, { useState } from 'react'

export default function Ex8() {
    const [result, setResult] = useState()
    const swap = () => {
        const stringInput = document.getElementById("string8").value
        const stringArr = stringInput.split(" ")
        for(let i = 0; i < stringArr.length; i++){
            const indexRandom = Math.floor(Math.random() * (i+1))
            var temp = stringArr[i]
            stringArr[i] = stringArr[indexRandom]
            stringArr[indexRandom] = temp
        }
        
        setResult(stringArr.join(","))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>8.Đổi chỗ ngẫu nhiên vị trí các phần tử trong mảng</div>
      <input style={{height: "30px", width: "300px"}} id="string8" type="text" placeholder='Nhập số cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={swap}>Sắp xếp</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
