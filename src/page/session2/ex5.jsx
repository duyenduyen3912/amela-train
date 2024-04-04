import React, { useState } from 'react'

export default function Ex5() {
    const [result, setResult] = useState("")
    const sort = () => {
        const numberInput = document.getElementById("string5").value
        const numberArr = numberInput.split(" ").map((element, index) => {
            parseInt(element, 10)
            return element % 2
        }
        );
        setResult(numberArr.join(","))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>5.Sắp xếp tên ngược bảng chữ cái</div>
      <input style={{height: "30px", width: "300px"}} id="string5" type="text" placeholder='Nhập các số cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={sort}>Sắp xếp</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
