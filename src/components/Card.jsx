import {useNavigate} from 'react-router-dom'
const Card = ({title, description, tags, $id}) => {
    const navigate = useNavigate()
  return (
    <div>
        <div className=" min-w-96 h-96 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-40">{description.slice(0,200)}</p>
                <p className='font-extralight font-mono text-sm leading-5 antialiased truncate break-words text-slate-700 dark:text-slate-300'>{tags.length>0 && tags.map(tag=><span key={tag}className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mb-2">{tag}</span>)}</p>
            </div>
            <div className='relative object-left-bottom mt-5'>
                <button onClick={()=>navigate(`/challenges/${$id}`)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bottom-0">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Card