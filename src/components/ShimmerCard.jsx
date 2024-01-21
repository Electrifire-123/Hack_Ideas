const ShimmerCard = () => {
    // const mainCardContent = item.card.card
  return (
    <div className='w-96 m-2 hover:cursor-pointer hover:scale-95 origin-center animate-pulse rounded-lg'>
        <div className="bg-white dark:bg-black dark:text-white p-5 rounded-lg">
            <h3 className='font-bold font-mono text-lg leading-6 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-70 h-8 m-1'> </h3>
            <h3 className='font-bold font-mono text-lg leading-6 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-64 h-8 m-1'> </h3>
            <div className='flex flex-col my-4'>
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-70 h-5 m-1'> </h4>
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-70 h-5 m-1'> </h4>
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-70 h-5 m-1'> </h4>
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-70 h-5 m-1'> </h4>
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-70 h-5 m-1'> </h4>
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-64 h-5 m-1'> </h4>
            </div>
            <div className="flex">
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-64 h-5 m-1'> </h4>
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-64 h-5 m-1'> </h4>
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-64 h-5 m-1'> </h4>
                <h4 className='ps-1 mt-1 font-bold font-mono text-lg leading-5 antialiased truncate break-words bg-slate-400 dark:bg-slate-700 w-64 h-5 m-1'> </h4>
            </div>
            <div className="relative object-left-bottom mt-5">
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-gray-700 dark:focus:ring-slate-800 bottom-0 w-32 h-8">
                  
              </button>
            </div>
        </div>
    </div>
  )
}

export default ShimmerCard