import React, { useEffect, useState } from 'react';
import { getWithoutAuth } from '../api/apiClient';



export const Test = () => {
  // const [message, setMessage] = useState([]);


  const getMessage = async () => {
    const data = await getWithoutAuth('/testroute');
    console.log(data)
    // const requestOptions = {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json'},
    // }


    // const response = await fetch('/test', requestOptions);
    // console.log(response)
    // const data = await response.json();
    // console.log(data)
    // setMessage(data);
    // console.log('4')


    

    // if (!response.ok) {
    //   console.log('sjdghfhdsfhkdshf');
    // } else {
      
    // }
  };

  

  useEffect(()=> {
    getMessage();
  }, []);
   
  return (
    <div>
      <h1>sffd</h1>
    </div>
  );
}


// {
//   id: 'alksdjf',
//   name: 'work',
//   likes: 2,
//   data: '21.01.2022',
// },
// {
//   id: 'asdf',
//   name: 'hi',
//   likes: 15,
//   data: '21.10.2022',
// },
// {
//   id: 'sdfghgsfh',
//   name: 'work',
//   likes: 2,
//   data: '21.01.2022',
// },
// {
//   id: 'sdfr',
//   name: 'hi',
//   likes: 15,
//   data: '21.10.2022',
// }

