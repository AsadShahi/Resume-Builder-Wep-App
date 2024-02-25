import React from 'react'

export default function Loading() {
    return (
        <div>
        <div className="spinner-border text-primary" role='status'>
            <span className='visually-hidden'>Loading...</span>

        </div>
        <span>
            Loading.. please Wait...
        </span>
        </div>
    )
}
