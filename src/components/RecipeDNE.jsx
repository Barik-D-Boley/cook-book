import React from 'react'

function recipeDNE() {
    return (
        <div className='welcome'>
            <div className='dne' id='dneTitle'><h1>No Recipes Exist</h1></div>
            <div className='dne' id='dneText'><p>Try changing the input fields and submit again</p></div>
        </div>
    )
}

export default recipeDNE
