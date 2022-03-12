import React from 'react'
import { AppList } from './List/List'
import './styles.css'


export const AppClinic = ({list}) => {
//   const [listClinic, setListClinic] = useState([]);

//   //connect ke API
//   const getListClinic = async () =>{

//   try {
//     const response = await petmateAPI.get(/user/seeclinic).then(res=>{
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
    <div className='list-wrap'>
      {list.map(item => <AppList key={item.id} item={item}/>)}
    </div>
  )
}
