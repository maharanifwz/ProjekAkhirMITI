import React from 'react'
import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'Nama Klinik',
      dataIndex: 'nama',
      key: '1',
    },
    {
      title: 'Jenis Layanan',
      dataIndex: 'layanan',
      key: '2',
    },
    {
      title: 'Jadwal',
      dataIndex: 'jadwal',
      key: '3',
    },
    {
      title: 'Harga',
      dataIndex: 'harga',
      key: '4',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: '5',
    }
  ];
  
  const data = [
    {
      key: 'key',
      nama: 'Andista Animal Care',
      layanan: 'Layanan Ke Rumah',
      jadwal: '12 Maret 2022(10.00 WIB)',
      harga: 'Rp 150.000',
      status: 
        <div style={{display: 'flex', justifyContent:'space-around'}}>
            <i style={{marginTop:5, color:'red'}} class="fa-solid fa-circle"/>
             Belum Verifikasi
        </div>
    },
]

export const AppTable = () => {
  return (
    <div>
        <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false}/>
    </div>
  )
}
