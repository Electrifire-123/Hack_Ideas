import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import service from '../appwrite/config'
import { useSelector } from 'react-redux'
import ShimmerSingle from '../components/ShimmerSingle'
const SingleChallenge = () => {
    const {id} = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [upVotes, setUpVotes] = useState([])
    const userInfo = useSelector(state=>state.auth.userInfo)
    const navigate = useNavigate()
    console.log(id)


    const upVote = async () => {
        let upVotedArray = upVotes || []
        console.log("Called Upvote")
        let checkUpVote = upVotedArray.includes(userInfo.$id)
        try {
            if(checkUpVote){
                upVotedArray = upVotedArray.filter(id=>id !== userInfo.$id)
            }else{
                upVotedArray.push(userInfo.$id)
            }
        setUpVotes(upVotedArray)
        let response = await service.upVoteChallenge(data.$id,upVotedArray)
        setData(response)
        console.log("UpVote RESPONSE :: ",response)
        } catch (error) {
            console.log("Appwrite Service Upvote failed ::",error)
        }
    }

    const deleteChallenge = () => {
        try {
            if(confirm('Are you sure you want to delete this challenge!')===true){
                service.deleteChallenge(id).then(res=>{
                    if(res) alert("Challenge Deleted!")
                    navigate('/')
                })
            }
        } catch (error) {
            console.log("Appwrite Service Delete challenge error ::",error )
        }
    }

    useEffect(()=>{
        try {
            service.getChallenge(id).then(challenge=>{
                if(challenge){
                    const upVotesArray = challenge?.upVotes?.map((user) => user.$id);
                    setUpVotes(upVotesArray)
                    setData(challenge)
                }
            }).catch(e=>console.log(e))
            .finally(setLoading(false))
        } catch (error) {
            console.log("Appwrite service Get Challenge failed :: ",error)
        }
    },[id])
    console.log(data)
    console.log("userInfo ::",userInfo)
    console.log("UpVotesArray:",upVotes)
    return (
        <div className='h-fit w-screen mt-16 p-5 flex justify-center align-middle items-center max-h-fit min-h-screen flex-col'>
        {data?
        <div className='fle lg:w-[60%] md:w-[70%] max-w-fit'>
            <div className='bg-white rounded-2xl'>
                <div className='w-full'>
                    <h2 className=' text-black text-center w-full font-bold font-mono text-3xl leading-6 antialiased text-ellipsis break-words p-8'>{data?.title}</h2>
                </div>
                <div className='w-full text-wrap break-words '>
                    <h2 className=' text-black text-start min-h-68 font-bold font-mono text-lg leading-6 antialiased text-ellipsis break-words p-8 w-full my-0 m-auto'>{data?.description}</h2>
                </div>
                <div className='w-full'>
                    <h2 className=' text-black text-start font-light font-mono text-md leading-6 antialiased break-words p-1 w-full my-0 m-auto'>Author: <span className='font-bold'>{data?.creator?.name}</span></h2>
                </div>
                <div className='w-full'>
                    <h2 className=' text-black text-start font-light font-mono text-md leading-6 antialiased break-words p-1 w-full my-0 m-auto'>{data?.tags?.length>0 &&data?.tags?.map(tag=><span key={tag} className=" bg-gray-100 text-gray-800 text-xs me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 mb-2 font-bold">{tag}</span>)}</h2>
                </div>
                <div className='w-full'>
                    <h2 className=' text-black text-start font-light font-mono text-md leading-6 antialiased break-words p-1 w-full my-0 m-auto'>Published At: <span className='font-bold text-slate-800 bg-slate-400'>{new Date(data.createdDate).toLocaleString()}</span> </h2>
                </div>
            </div>
            <div className='flex flex-row h-fit'>

                <button className={` ${upVotes.includes(userInfo['$id'])?'bg-blue-200':'bg-white'} text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500`} onClick={upVote}>
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                    </svg> 
                    <span className='w-20'>{data?.upVotes?.length}</span>
                </button>
                {data?.creator?.$id === userInfo?.$id 
                    && <>
                        <button className=' bg-blue-500 rounded-md m-1 font-mono font-bold px-2' onClick={()=>navigate(`/edit/${id}`)}>
                            <svg className="h-10 w-10 text-blue-900" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                        </button>
                        <button className=' bg-blue-500 rounded-md m-1 font-mono font-bold px-2' onClick={deleteChallenge}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                        </>
                }
            </div>
        </div>
        :loading?
        <ShimmerSingle/>
        :<div className='h-screent'><h1>No Data To Show</h1></div>
    }
        
    </div>
  )
}

export default SingleChallenge