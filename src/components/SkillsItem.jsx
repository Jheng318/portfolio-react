function SkillsItem({ json, map, id }) {
  return (
    <div className="skillItem" id={id}>
      <div className="textDiv">
        <h2>{json.title}</h2>
        <p>{json.text}</p>
      </div>
      <div className="grid-con">
        {json.skillsArr.map((skill) => (
          <div className="grid-item" key={skill}>
            <img src={map[skill]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsItem;
