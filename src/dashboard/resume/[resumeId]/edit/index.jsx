import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/data/dummy';

function EditResume() {
    const params=useParams();
    const [resumeInfo,setResumeInfo]=useState();

    useEffect(()=>{
        setResumeInfo(dummy);
    },[])

  return (
    <ResumeInfoContext.Provider value={{}}>
    <div className='grid grid-cols md:grid-cols-2 p-10 gap-10'>
        {/* Form Section */}
          <FormSection/>
        {/* Preview Section */}
          <ResumePreview/>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume