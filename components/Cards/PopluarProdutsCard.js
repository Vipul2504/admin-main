import Image from 'next/image'
import React from 'react'

const PopluarProdutsCard = () => {
    return (
        <div className='border-2 mb-4 border-black flex items-center p-2 cursor-pointer'>
            <div className=''>
                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a58aaeeee8a04a3e951fad0a00a1a8af_9366/Predator_Freak.4_Flexible_Ground_Boots_Red_FY6319_01_standard.jpg" alt="" className='w-16 p-1 bg-gray-100' />
            </div>
            <div className='mx-4 flex justify-between items-center w-full'>
                <div>
                    <h1 className='font-bold'>PREDATOR FREAK.4 FLEXIBLE GROUND BOOTS</h1>
                    <h1 className='font-medium text-gray-400'>Dec 23, 2021</h1>
                </div>
                <h1 className='font-bold'>3150.00</h1>
            </div>
        </div>
    )
}

export default PopluarProdutsCard
