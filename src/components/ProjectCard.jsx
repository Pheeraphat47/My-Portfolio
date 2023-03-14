import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl , link }) => {
  return (
    <Col size={32} sm={14} md={12} lg={6}>
      <a href={link} target="_blank"><div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
          <h4>{title}</h4>          
          <h5>{description}</h5>
        </div>
      </div>
      </a>
    </Col>
  )
}
