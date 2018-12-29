import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker'

const App = () => {
  return (
 <div className='ui container comments'>
 <div className='comment'>
 <a href='/' classname='avatar'>
  <img alt='avatar' src={faker.image.avatar()}/>
 </a>
  <div className='content'>
  <a href='/'clasName='author'>
   sam 
  </a>
  <div className='meta-data'>
  <span className='date'> today at 10:00 pm</span>
  </div>
  <div clasName='text'>My name is Terry</div>
   </div>
  </div>
 </div>
);
}

ReactDOM.render(<App/>, document.querySelector('#root'))