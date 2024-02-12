import "./index.css";

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { projectId, imageURL, description, title } = projectDetails;
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick="window.open('https://in.docworkspace.com/d/sIFXU5dPLAffp8aMG')"
          >
            GitHub
          </button>
          <button type="button">Live Demo</button>
        </div>
      </li>
    </>
  );
};

export default ProjectItem;
