import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import awardImg1 from "../assets/img/SIT_Helloworld.jpg";
import awardImg2 from "../assets/img/Environhack.jpg";
import awardImg3 from "../assets/img/Charm_Case_Com.jpg";
import awardImg4 from "../assets/img/Tobeit66.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const awards = [
    {
      title: "SIT Helloworld",
      description: "Best Front-End Development",
      imgUrl: awardImg1,
      link: "https://manticore-helloworldfennec.vercel.app/",
    },
    {
      title: "Climathon BKK",
      description: "1st runner up award",
      imgUrl: awardImg2,
      link: "https://www.canva.com/design/DAFQbQLz0nQ/XtaHO3kYkpr1AURXEXal8w/view?utm_content=DAFQbQLz0nQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    },
    {
      title: "Charm Case Competition",
      description: "1st runner up award",
      imgUrl: awardImg3,
      link: "https://drive.google.com/file/d/15i46LsiwKwhcs0ytwaoNg4kFECkaeNnG/view",
    },
    {
      title: "Tobeit66",
      description: "Best Project Award",
      imgUrl: awardImg4,
      link: "https://iforgot.vercel.app/",
    },
  ];

  const projects = [
    {
      title: "SIT Helloworld",
      description: "Best Front-End Development",
      imgUrl: awardImg1,
      link: "https://manticore-helloworldfennec.vercel.app/",
    },
    {
      title: "Climathon BKK",
      description: "1st runner up award",
      imgUrl: awardImg2,
      link: "https://www.canva.com/design/DAFQbQLz0nQ/XtaHO3kYkpr1AURXEXal8w/view?utm_content=DAFQbQLz0nQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    },
    {
      title: "Charm Case Competition",
      description: "1st runner up award",
      imgUrl: awardImg3,
      link: "https://drive.google.com/file/d/15i46LsiwKwhcs0ytwaoNg4kFECkaeNnG/view",
    },
    {
      title: "Tobeit66",
      description: "Best Project Award",
      imgUrl: awardImg4,
      link: "https://iforgot.vercel.app/",
    },
  ];

  const activity = [
    {
      title: "SIT Helloworld",
      description: "Best Front-End Development",
      imgUrl: awardImg1,
      link: "https://manticore-helloworldfennec.vercel.app/",
    },
    {
      title: "Climathon BKK",
      description: "1st runner up award",
      imgUrl: awardImg2,
      link: "https://www.canva.com/design/DAFQbQLz0nQ/XtaHO3kYkpr1AURXEXal8w/view?utm_content=DAFQbQLz0nQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    },
    {
      title: "Charm Case Competition",
      description: "1st runner up award",
      imgUrl: awardImg3,
      link: "https://drive.google.com/file/d/15i46LsiwKwhcs0ytwaoNg4kFECkaeNnG/view",
    },
    {
      title: "Tobeit66",
      description: "Best Project Award",
      imgUrl: awardImg4,
      link: "https://iforgot.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
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
