import React from 'react'

const PostDescription = ({id,caption,comment,name}) => {
  return (
    <div className='mx-6 leading-4'>
        <button><span className='text-[.6rem]'> <strong>{name}</strong> {caption}</span></button><br/>
        <button><span className='text-[.6rem] text-slate-500'>View all {comment} comments</span></button><br/>
    </div>
  )
}

export default PostDescription