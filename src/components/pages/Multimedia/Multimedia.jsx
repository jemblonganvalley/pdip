// Import to React
import React from 'react'
// END Import to React

// Import to CSS
import './Multimedia.css'
// END Import to CSS

// Create Component
const Multimedia = () => {
    return (
        <>
            <div className="wrapperMultimedia">
                {/* Headers */}
                <div className="headers">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">
                            <h2>Solid Bergerak Untuk<br />Indonesia Raya </h2>
                        </div>
                    </div>
                </div>
                <div className="linkedBerita">
                    <i class="fa fa-home">
                        <span>Home / Informasi Publik /</span>
                    </i>
                </div>
                {/* END Headers */}

                {/* Container1 */}
                <div className="container-1">
                    {/* Column1 */}
                    <div className="col1-container-1">
                        {/* Row1 */}
                        <div className="row1-col1">
                            <div className="box-video-row1">
                                <video width="auto" height="100%" controls>

                                </video>
                            </div>
                        </div>
                        {/* END Row1 */}
                        {/* Row2 */}
                        <div className="row2-col1">
                            {/* Column1 */}
                            <div className="col1-row2">
                                <p className="txt-title-row2">
                                    Admin PDI Perjuangan | 1 Januari 2019
                                </p>
                            </div>
                            {/* END Column1 */}

                            {/* Column2 */}
                            <div className="col2-row2">
                                <p className="txt-title2-row2">
                                    Megawati Soekarrnoputri, Ketua Umum PDI Perjuangan
                                </p>
                            </div>
                            {/* END Column2 */}
                        </div>
                        {/* END Row2 */}
                    </div>
                    {/* END Column1 */}
                </div>
                {/* END Container1 */}
            </div>
        </>
    )
}
// END Create Component

export default Multimedia