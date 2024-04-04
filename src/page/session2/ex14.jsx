import React, { useState } from 'react'

export default function Ex14() {
    const [result, setResult] = useState()
    var user = {
        name: "Nguyễn Tiến Đạt",
        age: 25,
        email: 'support@amela.vn'
    }
    const keys = Object.keys(user)
    keys.forEach((item) => {
        console.log(item)
    })
  return (
    <div >
    
    </div>
  )
}
