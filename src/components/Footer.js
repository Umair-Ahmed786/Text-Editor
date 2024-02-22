import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Footer = ({mode}) => {
    return (
        <>
            <div className={`align-self-end container-fluid bg-${mode==='dark'?'dark':'light'}`} style={{color: mode==='light'?'black':'white'}}>


                <div className="row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >

                    <div className="col col-sm-6 col-md-6 col-lg-6 foot_bg mt-3" >
                        <b className='foot_bg' style={{ fontSize: '1vw', paddingLeft: '2vw' }}>copyright2022 &copy; TextEditor</b>
                    </div>

                    <div className="col col-sm-6 col-md-6 col-lg-6 foot_bg mt-3">
                        <div className='col col-lg-3 col-sm-3 col-md-3' style={{marginLeft: '36vw'}}>
                        <FontAwesomeIcon className='foot_bg mx-2' icon={faLinkedin} style={{ height: '1rem'}} />
                        <FontAwesomeIcon className='foot_bg mx-2' icon={faFacebook} style={{ height: '1rem' }} />
                        <FontAwesomeIcon className='foot_bg mx-2' icon={faTwitter} style={{ height: '1rem' }} />
                        </div>
                        {/* pic of facebook etc */}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Footer
