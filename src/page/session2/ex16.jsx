import React, { useState } from 'react'

export default function Ex16() {
    var user = {
        name: "Nguyễn Tiến Đạt",
        age: 25,
        email: 'support@amela.vn'
    }
    const keys = Object.keys(user)
    if(keys.includes("name")) console.log("Có tồn tại key")
    else console.log("Không tồn tại key")
  return (
    <div >
    
    </div>
  )
}
