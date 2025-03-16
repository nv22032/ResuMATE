import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React from 'react'

function PersonalDetail({enabledNext}) {

        const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

        const handleInputChange=(e)=>{
            enabledNext(false)
            const {name,value}=e.target;

            setResumeInfo({
                ...resumeInfo,
                [name]:value
            })
        }

        const onSave=(e)=>{
              e.preventDefault();
              enabledNext(true)  
        }

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Personla Detail</h2>
            <p>Get started with the basic information</p>

            <form onSubmit={onSave}>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div>
                        <label className='text-sm'>Fisrt Name</label>
                        <input name='firstName' required onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label className='text-sm'>Last Name</label>
                        <input name='lastName' required onChange={handleInputChange}/>
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Jop Title</label>
                        <input name='jopTitle' required onChange={handleInputChange}/>
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Address</label>
                        <input name='address' required onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label className='text-sm'>Phone</label>
                        <input name='phone' required onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label className='text-sm'>Email</label>
                        <input name='email' required onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='mt-3 flex justify-end'>
                    <Button type='submit'>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetail