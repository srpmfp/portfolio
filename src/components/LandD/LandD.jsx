import { Carousel, Image } from 'react-bootstrap'

const LandD = () => {

    return (
        <div className="instDes">
            <Carousel fade={true} slide={false} controls={true} interval={10000} className="carouselWrapper  ">

                {/* Practitioner Promotion Application */}
                <Carousel.Item className="carouselItem" >


                    <Image src='/bA.png' rounded="true img1" text="Power App Example" alt="Power App Example" />

                    <Carousel.Caption className="bg-dark rounded border ">
                        <h3>Power FX </h3>
                        <p>Leveraged datawarehouse, power automate, and power app tools to create a dynamic applications for many business needs.<br />
                            This included promotional metrics, educational reimbursement tracking, and more.
                        </p>
                    </Carousel.Caption>

                </Carousel.Item>

                {/* Learning Systems Management  */}
                <Carousel.Item className="carouselItem">


                    <Image src='/lD.png' rounded="true" text="Learning And Development" />

                    <Carousel.Caption className="bg-dark font-size-6 border rounded ">
                        <h3>Learning Systems Management</h3>
                        <p>Created and controlled department-wide learning management systems, creating modules and tests focused on user experience.</p>
                    </Carousel.Caption>

                </Carousel.Item>

                {/* Teams Hub Management */}
                <Carousel.Item className="carouselItem">

                    <Image src='/teams.png' rounded="true" text="Third slide" />

                    <Carousel.Caption className="bg-dark font-size-2 border text-wrap rounded ">
                        <h3>SharePoint Management</h3>
                        <p>
                            Created an maintained a Teams/SharePoint site that functioned as a document repository for managers and employees to access key information for their jobs.
                        </p>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default LandD