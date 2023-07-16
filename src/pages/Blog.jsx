import React from 'react'
import { ItemBlog } from '../components/ItemBlog'

export const Blog = () => {
  return (
    <>

        <div className='bg-customprimary inner-shadow text-white container-fluid p-0 pt-5 m-0'>
            
            <h3 className='text-center text-customsuccess py-5'>
                Proyectos en desarrollo
            </h3>
            
            <ItemBlog 
                info={{name:"Dispensador de pastillas", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id veniam tempore ratione enim nemo odio corrupti molestiae nihil eum consectetur voluptate unde sed facilis aliquid, voluptas rem exercitationem quidem."}} 
                imgDirection="right" imgPath="/blog/dispensador.png" imgWidth="350px" bg="customprimary" text="white" bottomWaveColor="light" 
            />
            <ItemBlog 
                info={{name:"Pastillero", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id veniam tempore ratione enim nemo odio corrupti molestiae nihil eum consectetur voluptate unde sed facilis aliquid, voluptas rem exercitationem quidem."}} 
                imgDirection="left" imgPath="/blog/pastillero.png" imgWidth="350px" bg="light" text="customprimary" bottomWaveColor="customprimary"
            />
            
            <ItemBlog 
                info={{name:"Geolocalizador", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id veniam tempore ratione enim nemo odio corrupti molestiae nihil eum consectetur voluptate unde sed facilis aliquid, voluptas rem exercitationem quidem."}} 
                imgDirection="right" imgPath="/blog/gps.png" imgWidth="350px" bg="customprimary" text="white" bottomWaveColor="light"
            />
            <ItemBlog 
                info={{name:"Atril", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id veniam tempore ratione enim nemo odio corrupti molestiae nihil eum consectetur voluptate unde sed facilis aliquid, voluptas rem exercitationem quidem."}} 
                imgVertical={true}
                imgDirection="left" imgPath="/blog/atril.png" imgWidth="350px" bg="light" text="customprimary" bottomWaveColor="customprimary"
            />
            <ItemBlog 
                info={{name:"Seguimiento de bacterias", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id veniam tempore ratione enim nemo odio corrupti molestiae nihil eum consectetur voluptate unde sed facilis aliquid, voluptas rem exercitationem quidem."}} 
                imgDirection="right" 
                imgPath="/blog/bacteria-removebg-preview.png" imgWidth="350px" bg="customprimary" text="white" bottomWaveColor="customprimary"
            />

        </div>

    </>
  )
}
