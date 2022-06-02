import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

export const Loading = ({ color, loading, override }) => {
    color = '#fff'
    return (
        <div className="">
            <ClipLoader
                color={color}
                loading={loading}
                css={override}
                size={150}
            />
        </div>
    )
}
