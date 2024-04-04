import React, { useState } from 'react'

export default function Ex10() {
    const [result, setResult] = useState()
    const similiraty = () => {
        const stringInput1 = document.getElementById("arr101").value
        const stringInput2 = document.getElementById("arr102").value
        const stringArr1 = stringInput1.split(" ")
        const stringArr2 = stringInput2.split(" ")
        const arr = [...new Set([...stringArr1, ...stringArr2])]
        const resultArr = arr.filter((item, index) => {
            if( !stringArr1.includes(item) && stringArr2.includes(item)) return item
            if( stringArr1.includes(item) && !stringArr2.includes(item)) return item
        })
        setResult(resultArr.join("  ,"))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>10. Tìm phần tử không trùng trong 2 mảng</div>
      <input style={{height: "30px", width: "300px"}} id="arr101" type="text" placeholder='Nhập số cách nhau bằng 1 dấu cách'/>
      <input style={{height: "30px", width: "300px", marginLeft: "20px"}} id="arr102" type="text" placeholder='Nhập số cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={similiraty}>Tìm</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
