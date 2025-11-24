import { Carousel, Image } from 'react-bootstrap'

const LandD = () => {

    return (


        <Carousel id="LaD" fade={true} slide={false} controls={true} interval={10000} className="carouselWrapper instDes">

            {/* Practitioner Promotion Application */}
            <Carousel.Item className="carouselItem" >


                <Image src='/bA.png' rounded="true img1" text="Power App Example" alt="Power App Example" />

                <Carousel.Caption className="bg-dark rounded border text-align-left ">
                    <h3> <b> Power FX </b> </h3>
                    <p>Datawarehouse management through power automate and power app tools to create a dynamic applications for many business applications.</p>
                    <p> This includes promotional metrics, educational reimbursement tracking, automated emails for onboarding and more. </p>
                </Carousel.Caption>

            </Carousel.Item>

            {/* Learning Systems Management  */}
            <Carousel.Item className="carouselItem">


                <Image src='/lD.png' rounded="true" text="Learning And Development" />

                <Carousel.Caption className="bg-dark font-size-6 border rounded ">
                    <h3> <b> Learning Systems Management </b> </h3>
                    <p>Created and controlled department-wide learning management systems, creating modules and tests focused on user experience.</p>
                </Carousel.Caption>

            </Carousel.Item>

            {/* Teams Hub Management */}
            <Carousel.Item className="carouselItem">

                <Image src='/teams.png' rounded="true" text="Third slide" />

                <Carousel.Caption className="bg-dark font-size-2 border text-wrap rounded ">
                    <h3> <b> SharePoint Management </b> </h3>
                    <p>
                        Created an maintained a Teams/SharePoint site that functioned as a document repository for managers and employees to access key information for their jobs.
                    </p>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>


    )
}
export default LandD