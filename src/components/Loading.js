import React from 'react'

function Loading() {
    return (
        <>
            <div className="w-full h-full overflow-hidden fixed left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-[51]">
                <div className="max-w-7xl h-[100vh] flex justify-center mx-auto items-center flex-col">
                    <img src="./../img/Spinner-1s-200px.gif" alt="loading"/>
                </div>
            </div>
        </>
    )
}

export default Loading