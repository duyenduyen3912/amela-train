import React, { useState } from 'react'

export default function Ex12() {
    const [result, setResult] = useState()
    const check = () => {
        const stringInput1 = document.getElementById("string12").value
        const stringArr1 = stringInput1.split(" ")
        for(let i = 0; i < stringArr1.length; i++){
            parseInt(stringArr1[i], 10)
            if(stringArr1[i] > stringArr1[i+1]) {
                setResult(`${false}`)
                return
            } 
        }
        setResult(`${true}`)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>12. Kiểm tra mảng tăng dần</div>
      <input style={{height: "30px", width: "300px"}} id="string12" type="text" placeholder='Nhập số cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={check}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
