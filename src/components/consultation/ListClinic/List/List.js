import React, { useState, useEffect } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export const AppList = ({ item: { ID, NameClinic, Address, Contact }, }) => {
  const navigate = useNavigate();
//   const [listClinic, setListClinic] = useState([]);

//   //connect ke API
//   const getListClinic = async () =>{

//   try {
//     const response = await axios.get('https://2977-118-99-76-148.ngrok.io/user/seeclinic').then(res=>{
//       //buat nampung data
//       setListClinic(res.data.data);
//     });
//   }
//   catch (error) {
//     console.log(error);
//   }
// }

// useEffect(()=> {getListClinic();},[]);

  return (
    <div className='listItem-wrap' onClick={() => {if(ID === "1"){navigate('/consultation/detailclinic');}}}>
    <img src={NameClinic} alt='' />
    <header>
      <h5>{Address}</h5>
    </header>
    <footer>
      <p>
        {}
        <br/>
        <p style={{color: '#4F692F', fontSize:12, fontWeight:'bold'}}>{Contact}</p>
      </p>
    </footer>
  </div>
  )
}
