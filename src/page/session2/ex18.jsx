import React, { useState } from 'react'

export default function Ex18() {
    var user = [{
        name: "Nguyễn Tiến Đạt",
        age: 25,
        isStatus: true
    },
    {
        name: "Nguyễn Tiến Đạt",
        age: 26,
        isStatus: true
    },
    {
        name: "Nguyễn Tiến Đạt",
        age: 27,
        isStatus: false
    },
]
    const result = user.filter((item) => {
        return item.age > 25 && item.isStatus === true;
    });
    console.log("Mảng nhân viên lớn hơn 25 tuổi và isStatus = true", result)
  return (
    <div >
    
    </div>
  )
}
