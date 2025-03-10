import React from 'react'

function ResumeCardItem({resume}) {
  return (
    <link to={'/dashboard/resume/'+resume.resumId+"/edit"}>
        <div className='p-14 bg-secondary flex
        items-center justify-center h-[280px]
        border border-primary rounded-lg
        hover:scale-105 transition-all hover:shadow-md shadow-primary'>
                <Notebook/>
        </div>
        <h2 className='test-center my-1'>{resume.title}</h2>
    </link>
  )
}

export default ResumeCardItem