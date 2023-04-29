import React from 'react'


const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-5 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i><img src='/images/icon/1.png' alt=""/></i>24/7</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><a legacyBehavior href="tel:+2072001127"><i><img src='/images/icon/2.png' alt=""/></i>(207) 200-1127</a></li>
                                <li className='lan-sec'>
                                    <select name="" id="">
                                        <option value="">English</option>
                                        <option value="">Spain</option>
                                        <option value="">France</option>
                                        <option value="">Italy</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;