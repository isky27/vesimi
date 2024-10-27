import React, { useEffect } from 'react'

const Loader = ({isLoading}:any) => {

    let loader = false
    isLoading?.forEach((elem:any)=>{
        if(elem===true){
            loader= elem
        }
    })

    useEffect(() => {
        if (loader) {
          document.body.classList.add('loading');
        } else {
          document.body.classList.remove('loading');
        }
    
        // Cleanup function to remove the class when the component is unmounted or condition changes
        return () => {
          document.body.classList.remove('loading');
        };
      }, [loader]);


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