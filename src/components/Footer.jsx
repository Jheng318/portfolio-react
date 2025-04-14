import linkedin from "../assets/mdi_linkedin.svg";
import github from "../assets/mdi_github.svg";
function Footer() {
  return (
    <footer>
      <div id="footerDiv">
        <a href="https://www.linkedin.com/in/jia-hong-chan-8b56082ab/">
          <img src={linkedin} alt="My LinkedIn Profile" />
        </a>
        <a href="https://github.com/Jheng318">
          <img src={github} alt="My GitHub Profile" />
        </a>
      </div>
      <p>© 2024 Jia Hong </p>
    </footer>
  );
}

export default Footer;
