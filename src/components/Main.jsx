import Button from "./Button";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import profilePic from "/profile_pic.png";
import resumePdf from "/Chan_Jia_Hong_Resume.pdf";
import { ToastContainer, toast } from "react-toastify";

// Used for gihub desktop
// import profilePic from "./portfolio-react/profile_pic.png";
// import resumePdf from "./portfolio-react/Chan_Jia_Hong_Resume.pdf";

function Main({ isDark }) {
  function handleDown() {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Chan_Jia_Hong_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  function handleNotify() {
    return toast(
      "Thanks for reaching out! I’ve received your message and will reply soon.",
    );
  }
  return (
    <main className="limit">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section id="hero">
        <div id="imgDiv">
          <img src={profilePic} alt="profile picture" />
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
      <div id="edu-contact">
        <Education />
        <Contact handleNotify={handleNotify} />
      </div>
    </main>
  );
}

export default Main;
