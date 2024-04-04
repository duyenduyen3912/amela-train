import React, { useState } from 'react'

export default function Ex6() {
    const [result, setResult] = useState()
    const sort = () => {
        const stringInput = document.getElementById("string6").value
        const stringArr = stringInput.split(" ")
        const sortArr = stringArr.sort((a,b) => b.length - a.length)
        const resultArr = new Array()
        for(let i = 0; i < sortArr.length; i++){
           if(sortArr[i].length === sortArr[0].length){
            resultArr.push(sortArr[i])
           }
        }
        setResult(resultArr.join(","))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>6.In ra chuỗi có nhiều kí tự nhất</div>
      <input style={{height: "30px", width: "300px"}} id="string6" type="text" placeholder='Nhập chuỗi cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={sort}>Tìm</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
