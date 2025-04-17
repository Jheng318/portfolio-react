import education from "../data/education.json";
function Education() {
  return (
    <section id="education" className="limit">
      <h2>Education</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>{item.institution}</h3>
              <p className="dates">{item.period}</p>
              <ul>
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
