import React from 'react'
import'./Image.css';
import cat from './images.jpeg'
function ImageManipulation() {
  return (
    <div className= 'ImageCard'>
        <div className='catdiv'>
            <img src={cat} height={100} width={100} alt='cat Image'/>
        </div>
        <div className='buttondiv'>
            <button>enhance height</button>
            <button>enhance width</button>
            <button>rotate</button>
            <button>change color</button>
        </div>
    </div>
  )
}

export default ImageManipulation