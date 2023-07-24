import React from 'react'


export const ThreeDImage = ({imgPath="/models/Atril DF 19-06-2023.glb"}) => {
    return (
    <div className='row m-0 justify-content-center'>
        <x-model class="model" src={imgPath}></x-model>
    </div >
  )
}

