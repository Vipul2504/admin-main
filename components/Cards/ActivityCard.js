import React from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import moment from 'moment'
import Link from 'next/link'


const ActivityCard = ({ data }) => {

    return (
        <Link href={`/order/${data.orderNumber}`} passHref>
            <div className='mb-4 flex items-center p-2 cursor-pointer'>
                <div className='w-full'>
                    <h1 className='font-bold'>Order <span className='text-yellow-500'>#{data.orderNumber}</span> Placed</h1>
                    <h1 className='font-medium text-gray-400'>{moment(data.createdAt).fromNow()}</h1>
                </div>
            </div>
        </Link>
    )
}

export default ActivityCard
