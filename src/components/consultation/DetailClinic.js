import React from 'react'
import { Detail } from '../common/Detail'
import detailClinic from '../../assets/Mask group.png'

export const AppDetail = () => {
  return (
    <div>
      <Detail 
        title='Andista Animal Care' 
        description='Jl. Kamboja No.2C, RW.1, Jatipulo, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta ' 
        image={detailClinic}
        article1="Rumah Sakit Hewan Dinas Peternakan Provinsi Jawa Timur pada awalnya adalah sebuah Klinik Hewan yang didirikan tahun 2002. Seiring dengan perkembangan zaman dan kebutuhan masyarakat yang semakin meningkat terhadap layanan kesehatan hewan, maka status Klinik Hewan secara bertahap ditingkatkan menjadi Rumah Sakit Hewan."
        article2="Rumah Sakit Hewan Dinas Peternakan Provinsi Jawa Timur merupakan kepanjangan fungsi pelayanan dari Bidang Kesehatan Hewan Dinas Peternakan Provinsi Jawa Timur."
        article3="Dengan terus melakukan peningkatan di segala aspek yang berhubungan dengan pelayanan jasa Medik Veteriner secara berkesinambungan, Rumah Sakit Hewan Dinas Peternakan Provinsi Jawa Timur berkomitmen untuk dapat menjadi Rumah Sakit Hewan Pemerintah yang berkualitas dan terjangkau. Upaya peningkatan kualitas pelayanan antara lain di tempuh melalui pembelajaran berkelanjutan pada tenaga Medik Veteriner contohnya melalui Continuing Profesional Development, seminar, workshop, bimbingan teknis (BIMTEK), yang melibatkan narasumber yang berkompeten di bidangnya. Disamping itu updating (pembaharuan) dan penambahan peralatan pendukung diagnosa juga menjadi agenda tahunan Rumah Sakit Hewan Dinas Peternakan Provinsi Jawa Timur yang ditujukan untuk meningkatkan ketepatan diagnosa."
        link="/consultation/detailclinic/booking"
        link2="http://bit.ly/jadwalkonsultasipetmate"
        klik="Buat Janji Konsultasi"
        klik2="Lihat Jadwal Konsultasi"
        service="Layanan yang Tersedia"
        desc1="Pemeriksaan umum"
        desc2="Pemeriksaan darah"
        desc3="Pemeriksaan mikrobiologiasi "
        desc4="Pemeriksaan X-ray"
        desc5="Perawatan Kesehatan Kulit"
        desc6="Pemeriksaan X-ray"
        >
        <div className='desc-detailClinic section1'>
          <center><div className='description'>
            <i class="fa-solid fa-clock"></i>
            <p>09.00 - 24.00 WIB</p>
          </div>
          <div className='description'>
            <i class="fa-solid fa-phone"></i>
            <p>62 821-1794-3152</p>
            </div></center>
          </div>
      </Detail>
    </div>
  )
}
