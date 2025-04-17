import Button from "./Button";
import Projects from "./Projects";
import Skills from "./Skills";

function Main({ isDark }) {
  function handleDown() {
    const url = "/Chan_Jia_Hong_Resume.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "Chan_Jia_Hong_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <main className="limit">
      <section id="hero">
        <div id="imgDiv">
          <img src="/profile_pic.png" alt="profile picture" />
        </div>
        <div id="textDiv">
          <p>
            Hi! I am <br />
            <span style={{ color: isDark ? "#9a94fe:" : "var(--purple)" }}>
              Chan Jia Hong
            </span>
          </p>
          <h1>Full Stack Developer</h1>
          <p>passionate about creating creative solutions for the web.</p>

          <Button onClick={handleDown}>Resume</Button>
        </div>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>
          Aspiring Software Engineer currently pursuing a Diploma in Infocomm &
          Media Engineering at Nanyang Polytechnic. Proud recipient of the
          Medallion of Excellence in the Web Technologies trade at WorldSkills
          Singapore 2025. Passionate about building clean, user-focused digital
          experiences. Outside of coding, I hit the gym regularly — it’s my
          go-to way to unwind and recharge after a long day of school.
        </p>
      </section>
      <Skills />
      <Projects />
      <section id="education"></section>
      <section id="contact"></section>
    </main>
  );
}

export default Main;
