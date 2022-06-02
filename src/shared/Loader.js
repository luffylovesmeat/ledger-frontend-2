import React from 'react'
import { Loading } from './Loading'

export const Loader = () => {
    return (
        <div className='h-[100vh] fixed w-full z-[100] bg-[rgba(255, 216, 77, 0.3)] backdrop-blur-md bottom-0 flex items-center justify-center left-0'>
            <Loading />
        </div>
    )
}
