const ShimmerSingle = () => {
  return (
    <div className='h-96 w-screen mt-16 p-5 flex justify-center align-middle items-center max-h-fit min-h-screen'>
        <div className=' w-[600px]'>
            <div className=' bg-slate-400 rounded-2xl h-96'>
                <div className='w-[600px]'>
                    <h2 className=' text-black text-center w-full m-2 bg-slate-600 h-8 font-bold font-mono text-3xl leading-6 antialiased text-ellipsis break-words p-5 '></h2>
                </div>
                <div className='w-[600px] text-wrap break-words '>
                    <h2 className=' text-black bg-slate-600 h-4 text-start min-h-68 font-bold font-mono text-lg leading-6 antialiased text-ellipsis break-words p-3 w-full m-2'></h2>
                    <h2 className=' text-black bg-slate-600 h-4 text-start min-h-68 font-bold font-mono text-lg leading-6 antialiased text-ellipsis break-words p-3 w-full m-2'></h2>
                    <h2 className=' text-black bg-slate-600 h-4 text-start min-h-68 font-bold font-mono text-lg leading-6 antialiased text-ellipsis break-words p-3 w-full m-2'></h2>
                    <h2 className=' text-black bg-slate-600 h-4 text-start min-h-68 font-bold font-mono text-lg leading-6 antialiased text-ellipsis break-words p-3 w-full m-2'></h2>
                    <h2 className=' text-black bg-slate-600 h-4 text-start min-h-68 font-bold font-mono text-lg leading-6 antialiased text-ellipsis break-words p-3 w-full m-2'></h2>
                    <h2 className=' text-black bg-slate-600 h-4 text-start min-h-68 font-bold font-mono text-lg leading-6 antialiased text-ellipsis break-words p-3 w-full m-2'></h2>
                </div>
                <div className='w-36'>
                    <h2 className=' text-black text-start bg-slate-600 h-4 font-light font-mono text-md leading-6 antialiased break-words p-1 w-full my-4'>Author: <span className='font-bold'></span></h2>
                </div>
                <div className='w-36'>
                    <h2 className=' text-black text-start bg-slate-600 h-4 font-light font-mono text-md leading-6 antialiased break-words p-1 w-full my-4 '><span className=" bg-slate-100 text-slate-800 text-xs me-2 px-2.5 py-0.5 rounded dark:bg-slate-700 dark:text-slate-300 mb-2 font-bold"></span></h2>
                </div>
                <div className='w-36'>
                    <h2 className=' text-black text-start bg-slate-600 h-4 font-light font-mono text-md leading-6 antialiased break-words p-1 w-full m-2 my-0'>Published At: <span className='font-bold text-slate-800 bg-slate-400'></span> </h2>
                </div>
            </div>
            <div className='flex flex-row h-fit'>

                <button className={` text-slate-700 border border-slate-700 hover:bg-slate-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-full m-2 text-sm p-2.5 text-center inline-flex items-center dark:border-slate-500 dark:text-slate-500 dark:hover:text-white dark:focus:ring-slate-800 dark:hover:bg-slate-500`} >
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                    </svg> 
                    <span className='w-20 bg-slate-600 h-4'></span>
                </button>
                <>
                        
                </>
            </div>
        </div>
        
    </div>
  )
}

export default ShimmerSingle