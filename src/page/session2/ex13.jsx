import React, { useState } from 'react'

export default function Ex13() {
    const [result, setResult] = useState()
    const check = () => {
        const stringInput1 = document.getElementById("string13").value
        const stringArr1 = stringInput1.split(" ")
        for(let i = 0; i < stringArr1.length; i++){
            parseInt(stringArr1[i], 10)
            if(stringArr1[i] < stringArr1[i+1] || stringArr1[i] % 2 === 0) {
                setResult(`${false}`)
                return
            } 
        }
        setResult(`${true}`)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>13. Kiểm tra mảng số lẻ giảm dần</div>
      <input style={{height: "30px", width: "300px"}} id="string13" type="text" placeholder='Nhập số cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={check}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
