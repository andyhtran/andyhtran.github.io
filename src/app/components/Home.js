import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Container fluid >
                <Row className="homeBanner">
                    <Col className="homeIntro">
                        <p><span className="homeIntroBG">Hey there, <br/></span><span className="homeIntroBG">I'm Andy</span> 👋</p>
                    </Col>
                </Row>
                <Row className="homeAboutMe" id="about">
                    <Col className="homeAboutMeText">
                        <p>Thanks for visiting my site. I initially created this site to learn <strong>web development</strong>, but in the process I realized it could be used for much more.</p>
                        <h2>A little bit about me:</h2>
                        <p>I currently live in NYC and work @ Airbnb. Prior to that I spent 6 years living in <strong><em>San Francisco</em></strong>, 5 of which was spent as a consultant. Outside of work, I enjoy food, fitness, music, and learning.</p>
                        <p>I am an alumnus of Duke University, where I triple majored in Mechanical Engineering, Mathematics, and Economics.</p>
                        <p>I’m not the most open person, but I think great things can happen when we connect with our fellow people. Throughout this site, I hope I can share a piece of who I am, what I value, and where I want to go. Shoot me a message if anything resonates with you or if you want to have a deeper chat. 🙂</p>
                    </Col>
                    <Col className="homeQuote">
                        <h2>“Live as if you were to die tomorrow. Learn as if you were to live forever.” - Mahatma Gandhi</h2>
                        <p><br/></p>
                        <Image src="../../images/viewSFBridge.jpg" rounded fluid />
                    </Col>
                </Row>
                <Row className="homeContactBanner" id="contact">
                    <Col className="homeContactBannerText">
                        <p>Contact</p>
                    </Col>
                </Row>
                <Row className="homeAboutMe">
                    <Col className="homeContactBlurb">
                        <p>Thanks again for making it this far, I hope you enjoy the rest of the site!</p>
                        <p>You can reach me at andytran.inbox@gmail.com!</p>
                        <h2>Subscribe</h2>
                        <p>Your email address: <em>&#60;placeholder for when I build this&#62;</em></p>
                        <p>I infrequently send out updates of new content on my site.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;