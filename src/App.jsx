import React, { useState } from 'react'


const App = () => {
    const [title, settitle] = useState('')
    const [details, setDetails] = useState('')
    const [task, setTask] = useState([])
    const submitHandler=(e)=>{
         e.preventDefault()
        const copyTask=[...task]
        copyTask.push({title,details})
        setTask(copyTask)
        
        settitle('')
        
        setDetails('')
    }
    const deleteNote=(idx)=>{
      const copyTask=[...task]
      copyTask.splice(idx,1)
      setTask(copyTask)

    }
   
  return (
    
    <div className='h-screen  bg-black text-amber-50 lg:flex'>
         
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex gap-4 flex-col items-start  p-10'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <div className="flex gap-4 w-1/2 flex-col items-start">
        {/* //first input for heading */}
            <input type="text" placeholder='Enter Notes Heading'
         className='px-5 font-medium w-full outline-none py-2 border-2 rounded '
         value={title}
         onChange={(e)=>{
            settitle(e.target.value)
            // console.log(e.target.value)
         }}
         />
{/* //detail wala input */}
         <textarea value={details}onChange={(e)=>{
            setDetails(e.target.value)
         }}type="text" className='px-5  h-32 py-2 border-2 w-full font-medium outline-none rounded flex flex-row  ' placeholder='Write Details'/>

         <button className='bg-white text-black px-5 active:bg-amber-300 font-medium outline-none w-full py-2'>Add Notes</button>
        </div>
      </form>

      <div className='  lg:w-1/2  px-5 p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className="flex gap-5 mt-5 flex-wrap h-[90%] lg:bl-2 overflow-auto">
           {task.map(function(elem,idx){
            return <div key={idx}className="h-52 flex  justify-between relative items-start flex-col text-black w-40 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] py-8 px-4 ">
              
               <div className="div">
                 <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
               </div>
               <button onClick={()=>{
                deleteNote(idx)
               }}className='w-full cursor-pointer active:scale-95 bg-red-500 text-white py-2 text-xs rounded font-bold'>Delete</button>
            </div>
           })}
            
            
    </div>
    </div>
    </div>
  )
}

export default App
