import Head from 'next/head'
import { useState } from 'react'
import { Row, Col, Card } from 'antd'
// import { Parallax } from 'react-parallax'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Jump from 'react-reveal/Jump'
import Section3web from '../component/section-3-web'
import Section3mobile from '../component/section-3-mobile'
import Section4web from '../component/section-4-web'
import Section4mobile from '../component/section-4-mobile'


export default function Home() {
  const [jump, setJump] = useState(0)
  const assetPrefix = process.env.ASSET_PREFIX

  setTimeout(() => {
    setJump(jump + 1)
  }, 1500);

  const section3Content = [
    {
      img: "Icon metro-stack.svg",
      title: "Software Engineer",
      // title: "TEST1",
      desc: `I'm A Software Engineer who focused on developing Web Applications 
      & Mobile Apps APIs. Using NodeJS for developing the Backend & ReactJs for the Frontend. And I'm also had experiences in
      developing IoT projects`,
      url: "https://github.com/EgrianoA",
      buttonLogo: "Icon awesome-github.svg",
      buttonPreText: 'For my Programming portfolios you can visit my Github.',
      buttonText: "EgrianoA",
      // buttonText: "TEST1",
      parallaxConfig: {
        y: [150, -150]
      }
    },
    {
      img: "Group 315.svg",
      title: "Designer",
      // title: "TEST2",
      desc: `Some people ask. "How can a programmer can do design?", my answer is just "Why not?".
       It quite interesting when you can push the potential of logical thinking from the left brain & creative thinking from the right brain.
       So I like do the designing as part of my hobbies`,
      url: "https://dribbble.com/ArisatouGri",
      buttonLogo: "Icon awesome-dribbble.svg",
      buttonPreText: 'Anyway you can check my design portfolios in my Dribbble.',
      buttonText: "ArisatouGri",
      // buttonText: "TEST2",
      parallaxConfig: {
        y: [250, -250]
      }
    }
  ]

  const section4Content = [
    {
      year: "2019",
      title: "Automated Nutrient Control for Hydroponic",
      desc: "An automated nutrient control system for NFT hydroponic using Fuzzy Logic. The device used was ESP8266 and Raspberry Pi. Using cloudMQTT for the cloud and ThingSpeak for the dashboard",
      url: "https://github.com/EgrianoA/Automated-Nutrient-Control-for-Hydroponic",
      img: ""
    },
    {
      year: "2019",
      title: "Greenhouse Monitor System Using MiFlora",
      desc: "Creating a monitor dashboard for greenhouse using MiFlora as sensing device and ESP32 as microcontroller. This system using cloudMQTT for the cloud and Node-Red for the dashboard",
      url: "https://github.com/EgrianoA/Greenhouse-Monitor-Using-MiFlora",
      img: "Scheme.jpg"
    },
    {
      year: "2019",
      title: "Conceptual Design of Car Parts Marketplace App",
      desc: "This is a conceptual design of an App to make a special marketplace for car enthusiast to help them to find the car parts they need easier.",
      url: "https://dribbble.com/shots/7166120-OtoShop-A-Car-Parts-Marketplace-App?utm_source=Clipboard_Shot&utm_campaign=ArisatouGri&utm_content=OtoShop%20-%20A%20Car%20Parts%20Marketplace%20App&utm_medium=Social_Share",
      img: "mockup-dribbble.jpg"
    }

  ]

  const redirect = (url) => {
    window.open(url)
  }



  return (
    <div className="homepage">
      <div className="background" style={{ backgroundImage: `url(${assetPrefix}/bg/All.svg)` }}>
        <ParallaxProvider>
          <Row className="section1">
            <center>
              <Jump spy={jump}>
                <Slide right cascade>
                  <h1 className='hi'>Hi!</h1>
                </Slide>
              </Jump>
              <div className="scroll">
                <Parallax y={["0px", "125px"]} >
                  <p>SCROLL</p>
                </Parallax>
                <Parallax y={["0px", "50px"]} >
                  <img src={`${assetPrefix}/assets/Polygon 2.svg`} className="arrow-1" />
                </Parallax>
                <Parallax y={["-25px", "75px"]} >
                  <img src={`${assetPrefix}/assets/Polygon 3.svg`} className="arrow-2" />
                </Parallax>
              </div>
            </center>
          </Row>
          <Row>
            <div className="section2">

              <h1>
                <Fade cascade>
                  I'm Egriano Aristianto
                </Fade>
                {/* <Fade cascade>
                  Lorem ipsum dolor sit amet
                </Fade> */}
              </h1>
              <h4>
                <Fade cascade>
                  A Software Engineer (+ A Designer)
              </Fade>
                {/* <Fade cascade>
                  consectetur adipiscing elit
              </Fade> */}
              </h4>

              <Row>
                <Slide right cascade>
                  <div className="icons">
                    <div className='round'>
                      <a onClick={() => redirect("https://www.linkedin.com/in/egrianoaristianto/")}>
                        <img src={`${assetPrefix}/assets/Icon awesome-linkedin.svg`} />
                      </a>
                    </div>
                    <div className='round'>
                      <a onClick={() => redirect("https://github.com/EgrianoA")}>
                        <img src={`${assetPrefix}/assets/Icon awesome-github.svg`} />
                      </a>
                    </div>
                    <div className='round'>
                      <a onClick={() => redirect("https://www.hackerrank.com/egrianoa?hr_r=1")}>
                        <img src={`${assetPrefix}/assets/Icon simple-hackerrank.svg`} />
                      </a>
                    </div>
                    <div className='round'>
                      <a onClick={() => redirect("https://dribbble.com/ArisatouGri")}>
                        <img src={`${assetPrefix}/assets/Icon awesome-dribbble.svg`} />
                      </a>
                    </div>     
                  </div>
                </Slide>
              </Row>
            </div>
          </Row>
          <Row className='section3'>
            <center>
              <Parallax y={[50, -50]} >
                <h2 className='gradientText'>What I do</h2>
              </Parallax>
              <Row gutter={16}>
                <Section3web content={section3Content} />
                <Section3mobile content={section3Content} />
              </Row>
            </center>
          </Row>
          <Row>
            <div className='section4'>
              <center>
                <h3>Some of my works</h3>
                <Row>
                  <Section4mobile content={section4Content} />
                  <Section4web content={section4Content} />
                </Row>
              </center>
            </div>
          </Row>
          <Row >
            <div className='section5'>
              <center>
                <h4>Thank you for visiting my site!</h4>
                {/* <a><button className="section5Button"></button></a> */}
                <p>For detailed information about me and my works you can contact me through</p>
                <div className="icons">
                  <Row>
                    <div className="contactInfo">
                      <div className="email">
                        <Col xs={24}>
                          <img src={`${assetPrefix}/assets/Icon material-email.svg`} />
                        </Col>
                        <span>EgrianoA@gmail.com</span>
                      </div>
                      <div className="linkedin">
                        <Col xs={24}>
                          <img src={`${assetPrefix}/assets/Icon awesome-linkedin.svg`} />
                        </Col>
                        <a href={"https://www.linkedin.com/in/egrianoaristianto/"}>https://www.linkedin.com/in/egrianoaristianto/</a>
                      </div>
                    </div>
                  </Row>
                </div>
                <div className="finalWord">
                  <p>Designed and coded with love by Egriano Aristianto</p>
                  <p>2020 - All right reserved</p>
                </div>
              </center>
            </div>
          </Row>
        </ParallaxProvider>
      </div>
    </div >

  )
}
