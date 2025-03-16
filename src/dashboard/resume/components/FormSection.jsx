import React from 'react'

function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enabledNext,setEnableNext]=useState(false)
  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant='outline' size='sm' 
        className='flex gap-2'> <LayoutGrid/> Theme </Button>
        <div className='flex gap-2'>
          {activeFormIndex>1
          &&<Button size='sm'
          onClick={()=>setActiveFormIndex(activeFormIndex-1)}>
          <ArrowLeft/> </Button>}
          <Button
          disabled={!enabledNext} 
          className='flex gap-2' size='sm'
          onClick={()=>setActiveFormIndex(activeFormIndex+1)}
          > Next 
          <ArrowRight/> </Button>
        </div>
      </div>

      {/* Personal Detail */}
      {activeFormIndex==1?  <PersonalDetail enabledNext={(v)=>setEnableNext(v)}/>
      :null}
      {/* Summery */}

      {/* Experience */}

      {/* Educational Detail */}

      {/* Skills */}

    </div>
  )
}

export default FormSection