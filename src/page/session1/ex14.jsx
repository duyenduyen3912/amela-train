import React, { useState } from 'react'

export default function Ex14() {
    const [result, setResult] = useState()
  
    const check = () => {
        const number1 = document.getElementById("number14").value
        const arrNumber = number1.split("")
        const sortNumber = arrNumber.sort((a, b) =>  a- b)
       if(sortNumber[0] == 0) {
        for(let i = 0; i < sortNumber.length; i++){
            if(sortNumber[i] !== "0"){
                sortNumber[0] = sortNumber[i] 
                for(let j = 1; j <= i; j++){
                    sortNumber[j] = 0
                }
                setResult(sortNumber.join(""))
                return
            }
        }
        setResult(0)
        return
       } else {
        
        setResult(sortNumber.join(""))
       }
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>14.Sắp xếp số nhỏ nhất</div>
      <input style={{height: "30px", width: "300px"}} id="number14" type="number" placeholder='Nhập số'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={check}>Kiểm tra</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
  }
