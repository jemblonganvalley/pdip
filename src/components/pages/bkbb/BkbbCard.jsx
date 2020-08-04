import React from 'react'

const BkbbCard = ({title, body, image, width, height}) => {
  return (
    <div className='bkbb-card' style={{
        width : `${width}`,
        height : `${height}`,
        backgroundImage : `url(${image})`,
        backgroundSize : 'cover',
        display : 'flex',
        flexDirection : 'column',
        marginBottom : '40px',

    }}>
      
      <div className="bkk-card-redbox" style={{
          width : '100%',
          height : '30%',
          backgroundColor : '#ff0008cc',
          marginTop : 'auto',
          padding : '10px',
          color : '#ffff',
          display : 'flex',
          flexDirection : 'column',
          justifyContent : 'center'
      }}>
            <h5 style={{
                fontSize : '12pt',
                margin: '0',
                padding : '0',
                fontWeight : '500',
            }}>{title}</h5>
            <small style={{
                fontSize : '10pt',
            }}>{body}</small>

      </div>


    </div>
  )
}

export default BkbbCard
