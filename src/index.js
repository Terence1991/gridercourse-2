import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetails.js'
import ApprovalCard from './ApprovalCard.js'
import faker from 'faker';

const App = () => {
  return (
 <div className='ui container comments'>
    <ApprovalCard/>
   <CommentDetail author='sam' timeAgo="Today at 4:50 pm" content="I love code" avatar={faker.image.avatar()}/>
 </div>
);
}

ReactDOM.render(<App/>, document.querySelector('#root')) 