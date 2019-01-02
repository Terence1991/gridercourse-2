import React from 'react'
import faker from 'faker';


 const CommentDetail = (props) => {
   return (
    <div className='comment'>
    <a href='/' classname='avatar'>
     <img alt='avatar' src={props.avatar}/>
    </a>
     <div className='content'>
     <a href='/'clasName='author'>
      {props.author}
     </a>
     <div className='meta-data'>
     <span className='date'>{props.timeAgo}</span>
     </div>
     <div clasName='text'>{props.content}</div>
      </div>
     </div>
   )
 }

 export default CommentDetail;