'use client';
import React, { useState ,useEffect } from "react";
import Link from 'next/link';
import Help from '@/components/help';
import { SyncLoader } from 'react-spinners';

const FAQELN = () => {
 
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [faqs, setFaqs] = useState([
        {
            question: "What is ELN? How it is different from LES?",
            answer:
                "An Electronic Lab Notebook (ELN) is a software system that provides the users in a laboratory an electronic interface similar to a physical paper-based laboratory notebook.ELNs were originally designed for researchers and over a period of time 2 different types evolved one for research and another type was designed to execution of laboratory procedures (called Laboratory execution system or LES). Also, some of the ELNs were designed specifically for certain area or domain specific. ",
            open: false
        },
        {
            question: "What is the need for a ELN system? Why do the laboratories ",
            answer: "In a highly complex laboratory working environment, a well-maintained laboratory notebook is an important tool for documenting experimental progress and keeping researchers organized. Often the lab analysts and researchers find the task of maintaining the lab notebook either on paper or spreadsheet in their local computer systems a nightmare, as it poses serious challenges and vulnerabilities in terms of data integrity data loss, inaccuracies, inconsistencies intellectual property protection and non-compliance to statutory standards.",
            open: false
        },
        {
            question:
                "What is Logilab ELN and how can it be used by Laboratories?",
            answer: "Agaram Technologies’ Logilab ELN is a generic ELN intended to be used in laboratories across various scientific fields.",
            open: false
        }
    ]);
    const [listFaqs, setListFaqs] = useState([
        {
            question: "How Logilab ELN helps laboratories to achieve their objectives effectively?",
            answer:
                "Using Logilab ELN software, the lab organizations can aim to achieve higher productivity better quality and compliance to regulatory standards by adopting to paperless processes. This will ultimately result in overall better laboratory management, high level of data integrity and easily meet ALCOA’s ‘C’ which is “Contemporaneous” recording of data which are important for GxP labs",
            open: false
        },
        {
            question: "Can Logilab ELN be used only for specific type of laboratory or industry?",
            answer: "Logilab ELN is a generic software product that can be used across multiple laboratories in many industries. Logilab ELN is used by laboratories worldwide to document tests/experiments and research in various disciplines like chemistry, biotech, healthcare life sciences, energy, agriculture, engineering, metallurgy, environmental science etc. It has specific functionalities to help GxP regulated facilities.",
            open: false
        },
        {
            question:
                "Is it required to install Logilab ELN client software or any other software to use it?",
            answer: "Logilab ELN is a Browser-based application that can be run using any of the standard web browsers such as Chrome, Internet Explorer and Firefox, etc. The server components of the software will be installed only once in a central server (either on-premises or cloud server). It can be accessed across the secured network (on-premises) or over internet (cloud-based) using secured user credentials. All the laboratory data will be stored in a central server (i.e. single source of truth) with no need to store it on local systems.",
            open: false
        }
        ,
        {
            question: "How the users of a laboratory can record and maintain the test results or research observations using Logilab ELN?",
            answer: "Logilab ELN provides an easy-to-use excel like drag-and-drop user interface to design laboratory task or activity templates called Labsheets. They can be easily be designed, modified, shared and approved by the lab users and scientists by simple drag-and-drop of required type fields along with a very vital features namely, calculations, formula, SOPs creation, version control, input data validation, link to multiple template sheets, import and export of data, integration to instrument captured data, Data Parsing capabilities, Protocols setup and execution, etc.",
            open: false
        },
        {
            question:
                "Has Logilab ELN been made available as SaaS on Cloud-hosted Services? If so, how can the cloud-based implementation be more advantageous than on-premises option?",
            answer: "Logilab ELN has been implemented with SaaS model on Azure-hosted cloud environment. It can be accessed from any web browser using thin clients such as laptops, tablets and smart phones.",
            open: false
        }
    ]);

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    const toggleFAQ = (index: any) => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    const toggleListFAQ = (index: any) => {
        setListFaqs(
            listFaqs.map((listFaq, i) => {
                if (i === index) {
                    listFaq.open = !listFaq.open;
                } else {
                    listFaq.open = false;
                }

                return listFaq;
            })
        );
    };

   
  
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
        <div className='product'>

            <div className="inner-page">
                <nav className="navbar">
                    <ul className="list-unstyled row mb-0">
                        <li><Link href="./../">Home</Link></li>
                        <li><Link href="../faq-product">FAQ</Link></li>
                        <li><a href="">FAQ ELN</a></li>
                    </ul>
                </nav>
            </div>
            <div className='faq-list product-list'>
                <div className='container'>
                    <h1>ELN FAQ</h1>
                    <div className='faqs-section'>
                        <h5 className='text-left faq-header'>Most View FAQs</h5>
                        <div className="faqs">
                            {faqs.map((faq, index) => (
                                <div
                                    className={"faq " + (faq.open ? "open" : "")}
                                    key={index}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="faq-question">{faq.question}</div>
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='faqs-section'>
                        <h5 className='text-left faq-header'>List of FAQs</h5>
                        <div className="faqs">
                            {listFaqs.map((listFaqs, index) => (
                                <div
                                    className={"listfaq " + (listFaqs.open ? "open" : "")}
                                    key={index}
                                    onClick={() => toggleListFAQ(index)}
                                >
                                    <div className="faq-question">{listFaqs.question}</div>
                                    <div className="faq-answer">
                                        {listFaqs.answer}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        <Help/>
        </div>
    );
}

export default FAQELN;  