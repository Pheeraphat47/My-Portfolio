import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import "animate.css";
import ITcertImg1 from "../assets/img/Microsoft_Cert.png";
import ITcertImg2 from "../assets/img/Linkedin_Cert.png";
import ITcertImg3 from "../assets/img/Mu_Mooc_NetworkCert.png";
import ITcertImg4 from "../assets/img/Mu_Mooc_TestingCert.png";
import ITcertImg5 from "../assets/img/prototype_certificate.jpg";
import Borntodev1 from "../assets/img/SQL_Borntodev.png";
import Borntodev2 from "../assets/img/Nodejs-Expressjs_Borntodev.png";
import Borntodev3 from "../assets/img/Commandprompt_Borntodev.png";
import Borntodev4 from "../assets/img/GitHub_Borntodev.png";
import Borntodev5 from "../assets/img/Typescript_Borntodev.png";
import Borntodev6 from "../assets/img/JavaScript_Borntodev.png";
import Participated1 from "../assets/img/Gcom_Cert.png";
import Participated2 from "../assets/img/NEX-Bootcamp-Certificate.png";
import Participated3 from "../assets/img/my_better_country.jpg";
import Participated4 from "../assets/img/izuzucertificate.png";
import Participated5 from "../assets/img/42Bangkok_Cert.png";
import Participated6 from "../assets/img/caihackathonclub.png";



export const Certificate = () => {
  const IT = [
    {
      title: "Softwate Development Certificate | Microsoft",
      description:
        "  I learned Programming Concepts, data structure and Algorithms, and Software Design Principles which is a basic knowledge of programming that I have to know before I am doing in real jobs.",
      imgUrl: ITcertImg1,
      link: "https://www.linkedin.com/learning/certificates/36ae9c6d76dc8f27a1a7a40a5d6718c01e33cc3c078c353438af4cf57458f8fc",
    },
    {
      title: "Programming Fundamentals Certificate | Linkedin",
      description:
        "I learned the basic of programming and how to use the programming language to solve the problem from this course",
      imgUrl: ITcertImg2,
      link: "https://www.linkedin.com/learning/certificates/05ea28e1b4d292adb68b55cf26dcfc47ffeb3cff8ee1b3dd4c9766f33e2ef794",
    },
    {
      title: "Computer Network Certificate | Mu Mooc",
      description:
        "I learned about the basic of computer network and how to use the network to communicate with each other",
      imgUrl: ITcertImg3,
      link: "https://drive.google.com/file/d/1k9oRvaUqoG_u7btxXKU5Juwk_nqUl4PY/view?usp=sharing",
    },
    {
      title: "Software Testing Certificate | Mu Mooc",
      description:
        "I learned about the basic of software testing and how to test the software to make sure that the software is working correctly",
      imgUrl: ITcertImg4,
      link: "https://drive.google.com/file/d/1wuq1Q398Hox7XD1DGumg27zV1sJ6eT9F/view?usp=sharing",
    },
    {
      title: "Prototyping Application | Chula Mooc",
      description:
        "I learned about the basic of prototyping and how to use it to create the prototype for the application",
      imgUrl: ITcertImg5,
      link: "https://drive.google.com/file/d/1JSmMixVX-vQpip4G0HskSD9ktE2UE-o5/view?usp=sharing",
    },
  ];

  const Borntodev = [
    {
      title: "SQL Certificate",
      description:
        " I learned about the basic of SQL and how to use SQL to manage the database",
      imgUrl: Borntodev1,
      link: "https://school.borntodev.com/certificate/6UOHt1Yl8KP4",
    },
    {
      title: "Nodejs and Expressjs Certificate",
      description:
        "I learned about the basic of Nodejs and Expressjs and how to use them to create the server and the website",
      imgUrl: Borntodev2,
      link: "https://school.borntodev.com/certificate/3tsrHyFxAZer",
    },
    {
      title: "Command Prompt Certificate",
      description:
        "I learned about the basic of Command Prompt and how to use it to manage the computer",
      imgUrl: Borntodev3,
      link: "https://school.borntodev.com/certificate/YkosGXba5SUw",
    },
    {
      title: "Github Certificate",
      description:
        "I learned about the basic of Github and how to use it to manage the code",
      imgUrl: Borntodev4,
      link: "https://school.borntodev.com/certificate/feY4uRDQ6e5x",
    },
    {
      title: "TypeScript Certificate",
      description:
        "I learned about the basic of TypeScript and how to use it to create the website",
      imgUrl: Borntodev5,
      link: "https://www.borntodev.com/certificate_online/193522b074e9a94d94eea6566802d265/",
    },
    {
      title: "JavaScript Certificate",
      description:
        "I learned about the basic of JavaScript and how to use it to create the website",
      imgUrl: Borntodev6,
      link: "https://drive.google.com/file/d/1eoywrxCNwcoAEfWlW5JsxuaeuRMvcXE6/view",
    },
  ];

  const Participated = [
    {
      title: "Critical Thinking Certificate | Gcom 2022",
      description:
        " I Got score 77.68 of 100 and in 86.80% percentile in Thailand ( Higher than average person ) and got Bronze Medal Certificate",
      imgUrl: Participated1,
      link: "https://drive.google.com/file/d/13EJQYfk2HjsAZWMhUa2bgHruixFZoh9Y/view?usp=sharing",
    },
    {
      title: "Young Innovator Bootcamp Certificate | EnergyNex",
      description:
        " This is Certificate of EnergyNex Young Innovator Bootcamp that I participated in 2022",
      imgUrl: Participated2,
      link: "https://drive.google.com/file/d/1W7NpcLxDp5pJBLN_oEBvQ-vAd1QLvmk2/view",
    },
    {
      title: "My Better Country Hackathon Certificate | Konrad-Adenauer-Stiftung",
      description:
        "This is Certificate of My Better Country Hackathon that I participated in 2022",
      imgUrl: Participated3,
      link: "https://drive.google.com/file/d/1bkipmSZhFA9p9TDhcuVIjpm1WcOhtXyL/view?usp=sharing",
    },
    {
      title: "Tripetch Case Competion | Tripetch Group",
      description:
        " This is Certificate of Tripetch Case Competion that I participated in 2022",
      imgUrl: Participated4,
      link: "https://drive.google.com/file/d/1ID6eQSIoV_zpoJ2VRiVracENZaFjoGag/view",
    },
    {
      title: "International Startup Coding Challenge Certificate | 42 Bangkok",
      description:
        "This is Certificate of International Startup Coding Challenge that I participated in 2022",
      imgUrl: Participated5,
      link: "https://drive.google.com/file/d/1wNBaNXyOt99ejVzTMnzRfPpM2bgTnoB-/view",
    },
    {
      title: "CAI Club Hackathon Certificate | CPALL",
      description:
        " This is Certificate of CAI Club Hackathon that I participated in 2022",
      imgUrl: Participated6,
      link: "https://drive.google.com/file/d/1lNJx3cU62Qx3beL8c6A12xMu588PDWL5/view",
    },
  ];

  return (
    <section className="project" id="certificate">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Certificate</h2>
                  <br />

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">IT</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Borntodev</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Participated</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {IT.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {Borntodev.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                        {Participated.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
