"use client"
import React, { useState ,useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import Help from '@/components/help';
import LIMSlogo from 'public/image/LIMS-logo.png';
import ELNlogo from 'public/image/ELN-logo.png';
import SDMSlogo from 'public/image/SDMS-logo.png';
import DMSlogo from 'public/image/DMS-logo.png';
import CFR from 'public/image/CFR.jpg'; 
import { SyncLoader } from 'react-spinners';

const FAQ = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setFadeOut(true); 
        setTimeout(() => setLoading(false), 500); 
      }, 300); 
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
          <SyncLoader color="#1163ea" size={20} />
        </div>
      );
    }
    return (
        <div className='product App'>
            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row">
                        <li><Link href="./../">Home</Link></li>

                    </ul>
                </nav>
            </div>
            <div className='faq-list product-list'>
                <div className='container'>
                <h1 className='text-center'> Product FAQ </h1>
                    <ul>
                        <li>
                            <div className='pro-img'><Link href="../comingsoon"><Image alt='logo' src={LIMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>

                                {/* <h1><a href='#'>Qualis LIMS</a></h1> */}
                                <p>This guide provides instructions about configuring and using Qualis LIMS. Qualis  LIMS Web user manual is intended for administrators or anyone using Qualis LIMS
                                    Web application.</p>
                                {/* <ul className='moduleCount'>
                                        <li> Articles</li>
                                        <li> Sections</li>
                                    </ul> */}
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href='../faq-eln'><Image alt='logo' src={ELNlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                {/* <span><img src='image/ELN.jpg' /></span>
                                <h1><a href='#'>LogiLab ELN</a></h1> */}
                                <p>This guide provides instructions about configuring and using Logilab ELN. Logilab ELN Web user manual is intended for administrators or anyone using Logilab ELN
                                    Web application.</p>
                                {/* <ul className='moduleCount'>
                                        <li>7 Articles</li>
                                        <li>4 Sections</li>
                                    </ul> */}
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href='../faqsdms'><Image alt='logo' src={SDMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                {/* <span><img src='image/SDMS.jpg' /></span>
                                <h1><a href='#'>LogiLab SDMS</a></h1> */}
                                <p>This guide provides instructions about configuring and using Logilab SDMS. Logilab SDMS Web user manual is intended for administrators or anyone using Logilab SDMS
                                    Web application.</p>
                                {/* <ul className='moduleCount'>
                                        <li>21 Articles</li>
                                        <li>3 Sections</li>
                                    </ul> */}
                            </div>
                        </li>
                        <li>
                            <div className='pro-img'><Link href='../comingsoon'><Image alt='logo' src={DMSlogo} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using Qualis  DMS.Qualis DMS Web user manual is intended for administrators or anyone using Qualis DMS
                                    Web application.</p>
                                {/* <ul className='moduleCount'>
                                        <li>4 Articles</li>
                                        <li>2 Sections</li>
                                    </ul> */}
                            </div>

                        </li>
                        <li>
                            <div className='pro-img'><Link href='../faqcfr'><Image alt='logo' src={CFR} className='img-fluid'/></Link></div>
                            <div className='prot-dis'>
                                <p>This guide provides instructions about configuring and using CFR Gateway.CFR Gateway Web user manual is intended for administrators or anyone using CFR Gateway
                                    Web application.</p>
                                {/* <ul className='moduleCount'>
                                        <li>5 Articles</li>
                                        <li>3 Sections</li>
                                    </ul> */}
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
            <Help/>
        </div>
    );
}

export default FAQ;  