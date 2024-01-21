import { useEffect, useState } from 'react'
import TagsInput from '../components/TagsInnput';
import service from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
const CreateChallenge = () => {
    const userInfo = useSelector(state=>state.auth.userInfo)
    const {id} = useParams()
    const [challenge, setChallenge] = useState({
        title:'',
        description:'',
        tags:['Tech','Hackathon']
    })
    const [error, setError] = useState({
        title:'',
        description:'',
    })
    const navigate = useNavigate()
    const selectedTags = tags => {
		setChallenge(prev=>({...prev,tags:tags}))
	};

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setChallenge(prev=>({...prev,[name]:value}))
    }

    const createChallenge=(event)=>{
        event.preventDefault()
        try {
            switch(true){
                case challenge.title.length<10 === true && challenge.description.length<30  === true:
                    setError({
                        title:"Title should contain atleast 10 characters",
                        description:'Description Should contain atleast 30 characters'})
                        throw new Error("Title and description", { cause: 'input' });
                case challenge.description.length<30  === true:
                        setError({title:'',description:'Description Should contain atleast 30 characters'})
                        throw new Error("description", { cause: 'input' });
                case challenge.title.length<10  === true:
                        setError({description:'',title:"Title should contain atleast 10 characters"})
                        throw new Error("Title", { cause: 'input' });
            }
            setError({title:'',description:''})
            const {title, description, tags} = challenge
            service.createChallenge({
                title,
                description,
                userId: userInfo.$id,
                tags
            }).then(res=>{
                if(res){
                    console.log("Challenge created:: successfully ::",res)
                    alert("Challenge Created Successfully")
                    navigate('/')
                }
            }).catch(e=>console.log(e))
            
        } catch (error) {
            console.log("Appwrite Service Create Challenge failed ::",error)
        }
    }

    const updateChallenge=(event)=>{
        event.preventDefault()
        try {
            switch(true){
                case challenge.title.length<10 === true && challenge.description.length<30  === true:
                    setError({
                        title:"Title should contain atleast 10 characters",
                        description:'Description Should contain atleast 30 characters'})
                        throw new Error("Title and description", { cause: 'input' });
                case challenge.description.length<30  === true:
                        setError({title:'',description:'Description Should contain atleast 30 characters'})
                        throw new Error("description", { cause: 'input' });
                case challenge.title.length<10  === true:
                        setError({description:'',title:"Title should contain atleast 10 characters"})
                        throw new Error("Title", { cause: 'input' });
            }
            setError({title:'',description:''})
            const {title, description, tags} = challenge
            service.updateChallenge(
                id,
                {
                title,
                description,
                tags
            }).then(res=>{
                if(res){
                    console.log("Challenge created:: successfully ::",res)
                    // return <Success/>
                    navigate('/')
                }
            }).catch(e=>console.log(e))
            
        } catch (error) {
            console.log("Appwrite Service Create Challenge failed ::",error)
        }
    }

    useEffect(()=>{
        if(id){
            try {
                service.getChallenge(id).then(challenge=>{
                    if(challenge){
                        setChallenge({
                            title:challenge.title,
                            description:challenge.description,
                            tags:challenge.tags
                        })
                    }
                }).catch(e=>console.log(e))
            } catch (error) {
                console.log("Appwrite service Get Challenge failed :: ",error)
            }
        }
    },[id])
    
    return (
        <div className='w-screen bg-slate-400 flex flex-1 mt-16 flex-col items-center'>
            <div className=''>
                <h3 className='text-xl underline underline-offset-8 font-bold'>Write Your Own Challenge</h3>
            </div>
            <div className='w-[70%]'>
                <form className='flex justify-start flex-col items-start w-full' onSubmit={createChallenge}>
                    <div className=' leading-10 flex flex-col w-full'>
                        <label htmlFor='title' className='font-bold text-xl'>Title</label>
                        <input 
                            type='text'
                            name='title'
                            id='title'
                            value={challenge.title}
                            onChange={handleChange}
                            placeholder='PLEASE WRITE TITLE HERE'
                            required
                            className='h-10 p-10 w-full rounded-lg'
                        />
                        <div className='text-red-600'>{error.title}</div>
                    </div>
                    <div className=' py-2 rounded-b-lg w-full'>
                        <label htmlFor="description" className="font-bold text-xl">Description</label>
                        <textarea 
                             type='text'
                             name='description'
                             id='description'
                             onChange={handleChange}
                             value={challenge.description}
                             placeholder='PLEASE WRITE DESCRIPTION HERE'
                             required
                             rows={10}
                             className='block w-full px-0 text-sm text-black bg-white border-0 focus:ring-0 dark:placeholder-gray-400 rounded-lg p-4 pl-8 '
                        />
                        <div className='text-red-600'>{error.description}</div>

                    </div>
                    <label className='font-bold text-xl'>Tags</label>
                    <TagsInput selectedTags={selectedTags} tags={challenge.tags} />
                    {id?
                    <button className='btn bg-blue-600 rounded-md p-2 px-4 text-white font-bold m-1 mt-4' type='button' onClick={updateChallenge}>Update Challenge</button>
                    : 
                    <button className='btn bg-blue-600 rounded-md p-2 px-4 text-white font-bold m-1 mt-4' type='button' onClick={createChallenge}>Create Challenge</button>
                    }
                </form>
            </div>
        </div>
  )
}

export default CreateChallenge