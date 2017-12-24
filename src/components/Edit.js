import React from 'react';

const Edit = (props) => {
  
  console.log(props);
  return (
    <div>
      This is edit page {props.match.params.id}
    </div>
  )
}

export default Edit;