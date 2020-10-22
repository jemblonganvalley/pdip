import React from 'react'
import './dropDown.scss'
import { Link } from 'react-router-dom'

const DropDown = ({menuItem, listIndex}) => {

  const refresh = (pg)=>{
    window.location.href = `${pg}`;

  }

  const refresh2 = (pg)=>{
    window.location.href = `/${pg}`;

  }

  return (
   
       <div className="list-group dropdownMenu">

         {/* {console.log(menuItem)}
         {menuItem[listIndex].map((e,i)=>{
           console.log(e.title)
         })} */}

           <span></span>
            {menuItem[listIndex].map((e, i)=>(

                <a className="list-group-item"  
                  key={i} 
                  href={
                    e.title === 'Pedoman' ? '/detail/43' 
                    : e.title === 'Visi dan Misi' ? '/page/107'
                    : e.title === 'Tata Kelola Partai' ? '/page/839' 
                    : e.title === 'Struktur DPP' ? '/struktur' 
                    : e.title === 'Anggota Legislatif' ? '/struktur' 
                    : e.title === 'Lagu Perjuangan' ? '/' 

                    : e.title === 'Lahirnya Pancasila 1 Juni 1945' ? '/page/109' 
                    : e.title === 'Materi Pokok Pendukung' ? '/materipokok' 
                    : e.title === 'Wejangan Bung Karno' ? '/wejanganbungkarno' 

                    : e.title === 'Pidato Kongres PDI Perjuangan' ? '/detail/44' 
                    : e.title === 'Pidato Rakernas PDI Perjuangan' ? '/page/692' 
                    : e.title === 'Pidato Rakornas PDI Perjuangan' ? '/page/707' 

                    : e.title === 'Siaran Langsung' ? '/page/siaran_langsung' 
                    : e.title === 'Video Dokumentasi' ? '/page/dokumentasi' 
                    : e.title === 'Video Teaser' ? '/page/teaser' 
                    : e.title === 'Wawancara' ? '/page/wawancara' 

                    : e.title === 'Nasional' ? '/detail/46' 
                    : e.title === 'Daerah' ? '/detail/46' 
                    : e.title === 'Foto\/Gallery' ? '/detail/46' 
                    : e.title === 'Fokus' ? '/detail/46' 
                    : e.title === 'Nuansa' ? '/detail/46' 

                    : e.title === 'Siaran Pers' ? '/detail/45' 
                    : e.title === 'Struktur PPID PDI Perjuangan' ? '/detail/45' 
                    : e.title === 'Prosedur Pelayanan PPID' ? '/detail/45' 
                    : e.title === 'Visi dan Misi' ? '/detail/45' 
                    : e.title === 'Regulasi PPD' ? '/detail/45' 
                    : e.title === 'Tata Cara' ? '/detail/45' 
                    : e.title === 'LHKPN' ? '/detail/45' 
                    : e.title === 'Laporan Keuangan' ? '/detail/45' 
                    : e.title === 'Pilkada' ? '/detail/45' 
                    : e.title === 'Pileg' ? '/detail/45' 
                    : e.title === 'Pilpres' ? '/detail/45' 
                    : '/'
                  }>{e.title}</a>
            ))}
          
            <div className="arrow"></div>
        </div>
  )
}

export default DropDown
