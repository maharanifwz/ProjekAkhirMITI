import React from 'react'
import { Detail } from '../common/Detail'
import detailCommunity from '../../assets/detailKomunitas.png'



export const DetailKomunitas = () => {
  return (
    <div>
      <Detail 
        title='Komunitas Pecinta Kucing Jakarta' 
        description='Berdiri Sejak 4 Maret 2016' 
        image={detailCommunity}
        article1="Komunitas Pecinta Kucing Jakarta - KPKJ merupakan komunitas yang telah berdiri sejak 4 Maret 2016. Komunitas ini memiliki beberapa peraturan diantaranya harus melengkapi foto profil dan berkenalan terlebih dahulu ketika masuk ke komunitas ini. KPKJ juga melarang seluruh anggotanya untuk berbicara seputar SARA dan hal-hal lain yang dapat memicu pertengkaran"
        article2="Salam, KPKJ"
        article3=""
        link="https://www.facebook.com/KomunitasPecintaKucingJakarta"
        link2="/community/listcommunity"
        klik="Menuju Ke Halaman Facebook"
        klik2="Telusuri Komunitas Lainnya"
        service="Event Terbaru"
        desc1="Pameran kucing"
        desc2="Pameran kucing kucing"
        desc3="Pameran kucing"
        desc4="Pameran kucing kucing"
        desc5="Pameran kucing kucing"
        desc6="Pameran kucing kucing"
        >
      </Detail>
    </div>
  )
}
