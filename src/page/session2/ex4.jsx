import React, { useState } from 'react'

export default function Ex4() {
    const [result, setResult] = useState(0)
    const sum = () => {
        var sum2 = 0
       for(let i = 0; i < 100; i++) {
        if(i % 5 === 0) sum2 = sum2 +i
       }
        setResult(sum2)
    }
  return (
    <div >
      <div style={{marginBottom: "20px"}}>4.Tính tổng các số chia hết cho 5 từ 0 đến 100</div>
      <button style={{width: "100px", height: "30px", marginTop: "10px"}} onClick={sum}>Tính</button>
      <div style={{marginTop: "10px"}}>Kết quả: {" "} <b>{result}</b> </div>
    </div>
  )
}
