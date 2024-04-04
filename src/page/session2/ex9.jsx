import React, { useState } from 'react'

export default function Ex9() {
    const [result, setResult] = useState()
    const similiraty = () => {
        const stringInput1 = document.getElementById("arr91").value
        const stringInput2 = document.getElementById("arr92").value
        const stringArr1 = stringInput1.split(" ")
        const stringArr2 = stringInput2.split(" ")
        if(stringArr1.length > stringArr2.length) {
            const resultArr = stringArr1.filter((item, index) => {
                return stringArr2.includes(item)
            })
            setResult(resultArr.join(","))
        } else {
            const resultArr = stringArr2.filter((item, index) => {
                return stringArr1.includes(item)
            })
            setResult(resultArr.join(","))
        }
        
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>9. Tìm phần tử trùng trong 2 mảng</div>
      <input style={{height: "30px", width: "300px"}} id="arr91" type="text" placeholder='Nhập số cách nhau bằng 1 dấu cách'/>
      <input style={{height: "30px", width: "300px", marginLeft: "20px"}} id="arr92" type="text" placeholder='Nhập số cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={similiraty}>Tìm</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
