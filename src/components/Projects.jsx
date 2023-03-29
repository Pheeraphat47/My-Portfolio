import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import awardImg1 from "../assets/img/SIT_Helloworld.jpg";
import awardImg2 from "../assets/img/Environhack.jpg";
import awardImg3 from "../assets/img/Charm_Case_Com.jpg";
import awardImg4 from "../assets/img/Tobeit66.jpg";
import projectImg1 from "../assets/img/huddle-landing-page.png";
import projectImg2 from "../assets/img/news-homepage.png";
import projectImg3 from "../assets/img/sunnyside-landing-page.png";
import projectImg4 from "../assets/img/Country-search.png";
import projectImg5 from "../assets/img/weatherapp.png";
import projectImg6 from "../assets/img/form-validation.png";
import projectImg7 from "../assets/img/Calculator_webapp.png";
import projectImg8 from "../assets/img/Diary_website.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import activityImg1 from "../assets/img/java_course.png";
import activityImg2 from "../assets/img/golang_workshop.png";
import activityImg3 from "../assets/img/Energynex_Bootcamp.jpg";
import activityImg4 from "../assets/img/bettercountryhack.jpg";
import activityImg5 from "../assets/img/42bangkok.jpg";
import activityImg6 from "../assets/img/Cai_Hackathon.jpg";
import activityImg7 from "../assets/img/freshyband.jpg";
import activityImg8 from "../assets/img/Orchestra_band.jpg";
import activityImg9 from "../assets/img/kmuttstartup.jpg";
import activityImg10 from "../assets/img/googlemapapi_workshop.jpg";
import "../App.css";

export const Projects = () => {
  const awards = [
    {
      title: "SIT Helloworld",
      description: " We won the Best Front-End Development Award from this event. I also learned to use Tailwind and React from seniors in this activity. Our project is web application about Manticore with functions to hide and show content. Including allowing users to participate by having a quiz to do. ",
      imgUrl: awardImg1,
      link: "https://github.com/Pheeraphat47/Manticore_Mantijai",
    },
    {
      title: "Climathon BKK",
      description: "We won 1st runner up award in this Hackathon Our projects mainly works on adding green areas. There is an idea to develop the temple area to be a pocket park",
      imgUrl: awardImg2,
      link: "https://www.canva.com/design/DAFQbQLz0nQ/XtaHO3kYkpr1AURXEXal8w/view?utm_content=DAFQbQLz0nQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    },
    {
      title: "Charm Case Competition",
      description: "We won 1st runner up award in this competition Our project is Mainly in  business plan to help Chula Cooperative Shop earn more income. Can  have their own strengths to compete with competitors",
      imgUrl: awardImg3,
      link: "https://drive.google.com/file/d/15i46LsiwKwhcs0ytwaoNg4kFECkaeNnG/view",
    },
    {
      title: "Tobeit66",
      description: "We won in Best Project Award of this bootcamp Our project is a Web application for forgetful individuals have a feature  to assist in task management through the use of local storage. Implemented the Itracker feature , similar to AirTag , to track devices by   using IOT Device",
      imgUrl: awardImg4,
      link: "https://github.com/Pheeraphat47/IForgot",
    },
  ];

  const projects = [
    {
      title: "Huddle Landing Page",
      description:
        "Responsive Website from Frontend Mentor challenge Developed by using Html&Css ( styled with Tailwindcss )",
      imgUrl: projectImg1,
      link: "https://github.com/Pheeraphat47/huddle-landing-page-with-curved-sections",
    },
    {
      title: "News Homepage",
      description:
        "Responsive Website from Frontend Mentor challenge Developed by using Html,Css and JavaScript ( No Framwork )",
      imgUrl: projectImg2,
      link: "https://github.com/Pheeraphat47/News-Homepage",
    },
    {
      title: "Sunny Side Landing Page",
      description:
        "Responsive Website from Frontend Mentor challenge Developed by using Tailwindcss , Reactjs and VItejs",
      imgUrl: projectImg3,
      link: "https://github.com/Pheeraphat47/sunnyside-agency-landingpage",
    },
    {
      title: "Country Information Search",
      description:
        "A Web Application use to find country information developed by Using Reactjs and RestCountry API",
      imgUrl: projectImg4,
      link: "https://github.com/Pheeraphat47/Country_Information_Search",
    },
    {
      title: "Weather WebApp",
      description:
        "A Weather Web Application developed by Using Html , Css , JavaScript and Weather API",
      imgUrl: projectImg5,
      link: "https://github.com/Pheeraphat47/WeatherWebApp",
    },    
    {
      title: "Form Validation",
      description:
        "React Project about form validation using knowledge of React Hooks",
      imgUrl: projectImg6,
      link: "https://github.com/Pheeraphat47/form-validation",
    },
    {
      title: "Calculator WebApp",
      description:
        "Calulator in Web Application Using State/UseState in React",
      imgUrl: projectImg7,
      link: "https://github.com/Pheeraphat47/Calculator_WebApp",
    },
    {
      title: "Diary Website",
      description:
        "Project from Web Technology Subject Using html css and javascript (Responsive WebApp) No Framework and Library)",
      imgUrl: projectImg8,
      link: "https://github.com/Pheeraphat47/Diary",
    },
  ];

  const activity = [
    {
      title: "Staff in Google Map API workshop",
      description:
        "I have been staff in this workshop to help junior during workshop",
      imgUrl: activityImg10, 
      link: "https://drive.google.com/file/d/1Eejwcl6v3rmzWJ1-BPkLqsF_1ZdPFWmL/view?usp=sharing",     
    },
    {
      title: "Kmutt Startup Playground",
      description:
        "I have been participated in this event to learn about design thingking and Business plan to make a startup and connect with others teams in this event",
      imgUrl: activityImg9, 
      link: "https://drive.google.com/drive/folders/1VAnw3_3lmigRW-zS6N5uVKAQ87S1Q2_H?usp=sharing",     
    },
    {
      title: "Teaching Assistant",
      description:
        "I have been working as a teaching assistant in a Basic to Advance Java Programming course of the Learning Code Station Institute ",
      imgUrl: activityImg1,      
    },
    {
      title: "GDSC workshop authentication with Golang",
      description: " I have been participated in this workshop of GDSC Kmutt by learning about basic of golang ",
      imgUrl: activityImg2,
      
    },
    {
      title: "Energynex Young Innovators Bootcamp",
      description: "I have been participated in this bootcamp to learn about lean startup , do a project with my teams and connect with others",
      imgUrl: activityImg3,
      
    },
    {
      title: "My Better Country Hackathon",
      description: "I have been participated in this hackathon to hack about how to make old people have a better life my using a design thinking process",
      imgUrl: activityImg4,      
    },
    {
      title: "International Startup Coding Challenge 42 Bangkok",
      description: " I have participated in this to compete about business plans and Startup ideas in the tech industry ",
      imgUrl: activityImg5,      
    },
    {
      title: "CAI Club Hackathon",
      description: "I have been participated in this hackathon to hack in concept AI for youth Let us create innovations that support youth in specific areas by using AI as part of the project  within 2 days and 1 night.",
      imgUrl: activityImg6,      
    },
    {
      title: "Freshy band #9 ",
      description: "I participated in a band contest with my friends where I played the bassist of the band ",
      imgUrl: activityImg7,      
    },
    {
      title: "Orchestra Band",
      description: "I have been a member of the school orchestra for 3 years from 2019 - 2021, where I play double bass as my main instrument.",
      imgUrl: activityImg8,      
    },
  ];

  return (
    <section className="project" id="experience">
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
                  <h2>Experience</h2>
                  <br />

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Awards</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Activity</Nav.Link>
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
                          {awards.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {activity.map((project, index) => {
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
