import React, { useState } from 'react'

export default function Ex11() {
    const [result, setResult] = useState("")
    const resultArr = new Array()
    const process = (str, substr) => {
        if (str === "") {
            resultArr.push(substr);
        } else {
          process(str.slice(1), substr);
          process(str.slice(1), substr + str[0]);
        }
      };
    const handleFindString = () => {
        const string = document.getElementById("string11").value
        process(string, "")
        setResult(resultArr.join(",").slice(1))
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>11. In ra các tập con của mảng</div>
      <input style={{height: "30px", width: "300px"}} id="string11" type="text" placeholder='Nhập số cách nhau bằng 1 dấu cách'/>
      <br />
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={handleFindString}>Tìm</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
