import { useState, useEffect, useMemo} from 'react'
import service from '../appwrite/config'
import Card from './Card'
import ShimmerCard from './ShimmerCard'
const Container = () => {
    const [challenges, setChallenges] = useState([])
    const [loading, setLoading] = useState(true)
    const [votesMin,setVotesMin] = useState(0);
    const [votesMax, setVotesMax] = useState(0)

    const filter = useMemo(() => {
        if((votesMax === 0) && (votesMin === 0)){
            return challenges
        }
        const filter = challenges.filter(val=> val.upVotes.length>=votesMin && val.upVotes.length<=votesMax)
        console.log("FilteredChallenges ::",filter)
        return filter
    },[challenges,votesMax,votesMin])

    useEffect(()=>{
        try {
            service.getAllChallenge().then(challenge=>{
                if(challenge){
                    console.log("All Challenges ::",challenge)
                    setChallenges(challenge.documents)
                }
            }).catch((e)=>console.log(e))
             .finally(()=>setLoading(false))
            
        } catch (error) {
            console.log("Appwrite Service Get challenge failed::",error)
        }
    },[])

    // useEffect(()=>{
    // },[votesMin,votesMax,filter])

  return (
    <>
    {loading&&<h2>Loading...</h2>}
    <div className=' mb-1 mt-16 m-auto max-w-screen-xl min-h-screen'>
        <div className=' bg-slate-500 flex flex-row w-fit p-4 m-2 rounded-md mt-5'>
            <h3 className='p-1 m-1 font-mono font-bold'>Filter</h3>
            <div className='p-1 m-1 font-mono font-thin'>
                Votes: 
            <input type='number' value={votesMin} onChange={e=>setVotesMin(e.target.value)} className='rounded p-2'/> 
            To 
            <input type='number' value={votesMax} onChange={e=>setVotesMax(e.target.value)} className='rounded p-2'/></div>
        </div>
        <div className='flex flex-wrap content-center justify-center align-middle'>
        {filter.length>0 ? filter.map((challenge)=><Card {...challenge} key={challenge.$id}/>)
        :!loading?
            <h1>No Data Found</h1>
        :<>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
        </>
        }
        </div>
        {/* <NewCard/> */}
    </div>
    </>
  )
}

export default Container