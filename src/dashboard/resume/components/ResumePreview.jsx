import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview'

function ResumePreview() {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
      borderColor:resumeInfo?.themeColor
    }}>
       {/* Personal Detail */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
       {/* Summery */} 
            <SummeryPreview resumeInfo={resumeInfo} />
       {/* Professional Experience */} 
            <ExperiencePreview resumeInfo={resumeInfo} />
       {/* Educational */} 
            <EducationalPreview resumeInfo={resumeInfo} />
       {/* Skilss */} 
            <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  )
}

export default ResumePreview