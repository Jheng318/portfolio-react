import projData from "../data/project.json";
import Button from "./Button";
import img1 from "/MAD_proj.png";
import img2 from "/hotel.png";
function Projects() {
  const imgMap = {
    img1: img1,
    img2: img2,
  };
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      {projData.map((d) => {
        const title = d.title.split("-")[0].trim();
        return (
          <div className="project-items" id={title} key={title}>
            <img src={imgMap[d.img]} alt={title} />
            <div className="textDiv">
              <p className="specTitle dark-purple">{d.title}</p>
              <p className="dark-purple body">{d.body}</p>
              <ul className="tags">
                {d.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <Button>View Project</Button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
