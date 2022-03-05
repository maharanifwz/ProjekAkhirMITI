import React from 'react'
import { Button } from 'antd'

export const AppHero = () => {
  return (
    <div className='heroBlock'>
    <div className='hero-content'>
    <h3>Community</h3>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining
    essentially unchanged.
    </p>
    <div className="btnHolder">
              <Button type="primary" size="large">Book Now</Button>
            </div>
            </div>
            <div className='hero-image'>
                <img src='/images/image.png'></img>
            </div>
</div>
  )
}
