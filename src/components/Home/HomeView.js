import react from 'react';
import { useEffect, useState } from 'react';
import { Carousel, Image, Row, Container } from 'react-bootstrap'



import Contact from '../Contact/Contact.jsx';
import Fullstack from '../Fullstack/Fullstack.jsx';
import LandD from '../LandD/LandD.jsx';
import AllWork from '../Projects/AllWork.jsx';
import '../../css/custom.css';




const HomeView = () => {

    const scrollToPreviousSection = () => {
        const container = document.querySelector('.mainContainer');
        const sections = document.querySelectorAll('.instDes');

        if (!container || !sections.length) return;

        const containerTop = container.getBoundingClientRect().top;
        const currentScrollTop = container.scrollTop;

        // Find the previous section (iterate backwards)
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const sectionTop = section.getBoundingClientRect().top - containerTop + currentScrollTop;

            if (sectionTop < currentScrollTop - 200) { // 100px buffer
                container.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
                break;
            }
        }
    };

    const scrollToNextSection = () => {
        const container = document.querySelector('.mainContainer');
        const sections = document.querySelectorAll('.instDes');

        if (!container || !sections.length) return;

        const containerTop = container.getBoundingClientRect().top;
        const currentScrollTop = container.scrollTop;

        // Find the next section that's not fully visible
        for (let section of sections) {
            const sectionTop = section.getBoundingClientRect().top - containerTop + currentScrollTop;

            if (sectionTop > currentScrollTop + 400) { // 100px buffer
                container.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
                break;
            }
        }
    };

    useEffect(() => {

        const elementsToObserve = document.querySelectorAll(".instDes, .effCom, .m .fullStack, .powerSuite");

        // Add the 'visible' class to elements when they come into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");

                        if (entry.target.classList.contains('powerSuite')) {
                            document.querySelector('.downArrow')?.classList.remove("visible");
                        }
                        if (entry.target.classList.contains('fullStack') || entry.target.id === 'fullStack') {
                            document.querySelector('.upArrow')?.classList.remove("visible");
                        }
                    }
                    else {

                        if (entry.target.classList.contains('powerSuite')) {
                            document.querySelector('.downArrow')?.classList.add("visible");
                        }

                        if (entry.target.classList.contains('fullStack') || entry.target.id === 'fullStack') {
                            document.querySelector('.upArrow')?.classList.add("visible");
                        }
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 60% of the element is visible
            }
        );

        // Observe each element
        elementsToObserve.forEach((element) => observer.observe(element));

        // Handle scroll event for smooth scrolling
        const container = document.querySelector('.mainContainer');

        // Function to handle scroll event
        const handleScroll = (event) => {
            const useCustomScroll = !event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey && event.deltaY !== 0;

            // ensure handle scroll if mod keys are not pressed
            if (!useCustomScroll) {
                return;
            }

            event.preventDefault();

            container.scrollBy({
                top: event.deltaY * 0.4,
                behavior: 'smooth',
            });
            // 
        };


        // Add the event listener
        container.addEventListener('wheel', handleScroll, { passive: false });

        // Cleanup observer and event listener on component unmount
        return () => {
            elementsToObserve.forEach((element) => observer.unobserve(element));
            container.removeEventListener('wheel', handleScroll);
        };
    }, []);


    return (

        <main data-spy="scroll"
            data-target="#skillTree"
            data-offset="0"
            className="mainContainer p-0 m-0 container-fluid md-display-6 ">

            {/* Up Arrow Button */}
            <button onClick={scrollToPreviousSection}>
                <Image bsPrefix='upArrow' src="downArrow.png" className="upArrow" />
            </button>



            <Row id="fullStack" className="fullStack instDes row justify-content-end bg-row-1">
                <div className="d-flex justify-content-center align-items-center h-100">

                    <Fullstack />
                </div>
            </Row>

            {/* Down Arrow Button */}
            <button onClick={scrollToNextSection}>
                <Image bsPrefix='downArrow' src="downArrow.png" className="downArrow" />
            </button>


            {/* Learning and Development Section */}
            <div className="bg-row-1">
                <Container className=" instDes bg-row-1 itemContainer d-flex flex-column m-auto justify-content-between align-items-start">

                    <LandD />

                </Container>
            </div>
            {/* Portfolio Section */}
            <div id="Work" className="bg-row-1">
                <Container className=" instDes  itemContainer d-flex flex-column justify-content-between align-items-start ">
                    <div className="workCont h-100 d-flex flex-row overflow-scroll ">


                        <AllWork md={12} />


                    </div>
                </Container>
            </div>
            {/* Contact Section */}

            <div id="contact" className="justify-content-end bg-row-2">
                <div className="">
                    <div id="powerSuite" className="d-flex p-0 flex-column justify-content-center  m-auto instDes powerSuite ">
                        <Contact />
                    </div>
                </div>
            </div>
        </main >
    )
}


export default HomeView;