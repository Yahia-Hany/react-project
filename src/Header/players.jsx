import React from 'react'
import "./players.css"
export default function Players() {
  return (
    <div className='players'>
        <h1>top players</h1>
      <div className='player1'>
        <img src="https://store.fcbarcelona.com/cdn/shop/collections/WhatsApp_Image_2023-09-19_at_21.33.25.jpg?v=1696331150" alt="not found" />
        <p className='p1'>Games: 34</p>
        <p className='p2'>Goals: 29</p>
        <p className='p3'>Assists: 3</p>
        <button>See More</button>
      </div>
      <div className='player2'>
        <img src="https://www.fcbarcelona.com/photo-resources/2024/12/25/524f5dd8-1925-4c64-ad06-5fce9a855f6d/EA019746.jpg?width=1200&height=750" alt="not found" />
        <p className='p1'>Games: 29</p>
        <p className='p2'>Goals: 9</p>
        <p className='p3'>Assists: 12</p>
        <button>See More</button>
        
      </div>
      <div className='player3'>
        <img src="https://arabic.sport360.com/wp-content/uploads/2024/12/%D8%B1%D8%A7%D9%81%D9%8A%D9%86%D9%8A%D8%A7-%D8%A8%D8%B1%D8%B3%D8%A7-1.jpg" alt="not found" />
        <p className='p1'>Games: 35</p>
        <p className='p2'>Goals: 23</p>
        <p className='p3'>Assists: 12</p>
        <button>See More</button>
      </div>
    </div>
  )
}
