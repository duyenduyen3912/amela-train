import React, { useState } from 'react'

export default function Ex3() {
    const [result, setResult] = useState("")
    const sort = () => {
        const stringInput = document.getElementById("string3").value
        const stringArr = stringInput.split(" ")
        const sortArr = stringArr.sort((a,b) => b.localeCompare(a))
        setResult(sortArr.join(","))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>3.Sắp xếp tên ngược bảng chữ cái</div>
      <input style={{height: "30px", width: "300px"}} id="string3" type="text" placeholder='Nhập tên học viên cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={sort}>Sắp xếp</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
