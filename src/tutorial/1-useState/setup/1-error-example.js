import React from 'react';

const ErrorExample = () => {

  let title = 'Radom title';

  const clickHandle = () => {
    title = 'Something else';
  }

  return (
    <>
      <h1>{title}</h1>
      <button onClick={clickHandle()}>Change</button>
    </>
  )
  
}

export default ErrorExample;
