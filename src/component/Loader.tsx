import React from 'react'

const Loader = ({isLoading}:any) => {

    let loader = false
    isLoading?.forEach((elem:any)=>{
        if(elem===true){
            loader= elem
        }
    })
if(loader){
  return (
     <div className='overlayLoader'>
        <div className='loader'></div>
     </div>
  )
}else{
    return <div></div>
}}

export default Loader