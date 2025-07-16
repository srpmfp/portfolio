import React from 'react';
import { Image } from 'react-bootstrap';

const Fullstack = () => {
    return (

        <div className="instDes itemContainer h-100 rounded d-flex flex-row p-2 justify-content-center align-items-center smw-100 my-sm-5 my-xs-5 ">

            <Image src='transparentSeanHeadshot.png' className="headshot d-lg-inline d-md-none d-sm-none " alt="Headshot" />
            <div className="textCont">
                <h2>
                    <b> Full Stack Developer</b>
                </h2>
                <p className='bg-dark rounded p-2'>
                    <span> MERN stack developer</span> with a puzzle solving approach to building web apps.
                    <br /><br /> <span> Proficient with JavaScript, React, Node.js, and Express.js,</span> with experience in building RESTful APIs and integrating with MongoDB databases. Strong understanding of front-end technologies such as HTML, CSS, and Bootstrap for creating user-friendly interfaces. Committed to writing clean, maintainable code and following best practices in software development.
                </p><br />

                <div className="d-flex p-5 md-p-0 flex-column justify-content-center align-items-center m-auto scrollContainer">
                    <div className="infiniteScroll bg-transparent ">

                        <div className=" bg-transparent scroll-track">
                            <div className="img-wrapper bg-transparent "><Image src='/mongoDb.png' className="scroll-img" fluid alt="scrolling image" /></div>
                            <div className="img-wrapper bg-transparent "><Image src='/express.png' className="scroll-img" fluid alt="scrolling image" /></div>
                            <div className="img-wrapper bg-transparent "><Image src='/logo192.png' className="scroll-img" alt="scrolling image" /></div>
                            <div className="img-wrapper bg-transparent "><Image src='/nodeJs.png' className="scroll-img" fluid alt="scrolling image" /></div>


                            {/* Repeat the same images for seamless looping */}
                            <div className="img-wrapper bg-transparent "><Image src='/mongoDb.png' className="scroll-img" fluid alt="scrolling image" /></div>
                            <div className="img-wrapper bg-transparent "><Image src='/express.png' className="scroll-img" fluid alt="scrolling image" /></div>
                            <div className="img-wrapper bg-transparent "><Image src='/logo192.png' className="scroll-img" alt="scrolling image" /></div>
                            <div className="img-wrapper bg-transparent "><Image src='/nodeJs.png' className="scroll-img" fluid alt="scrolling image" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fullstack;