import React from 'react';
import Calender from './Calender';
import Form from './Form';

export default function Registration({setRegistered,setData}) {
  return (
   <>
        <Calender />
       <Form setRegistered={setRegistered} setData={setData} />
   </>
  )
}
