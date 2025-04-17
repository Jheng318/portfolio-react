import devSkills from "../data/devSkills.json";
import designSkills from "../data/designSkills.json";
import others from "../data/othersSkills.json";

import html5Logo from "../assets/logos_html-5.svg";
import css3Logo from "../assets/logos_css-3.svg";
import javascriptIcon from "../assets/skill-icons_javascript.svg";
import jqueryLogo from "../assets/devicon_jquery-wordmark.svg";
import vuejsLogo from "../assets/devicon_vuejs.svg";
import reactLogo from "../assets/logos_react.svg";
import laravelLogo from "../assets/devicon_laravel.svg";
import nodejsLogo from "../assets/material-icon-theme_nodejs.svg";
import expressLogo from "../assets/devicon_express.svg";
import mysqlLogo from "../assets/simple-icons_mysql.svg";
import bootstrapLogo from "../assets/mdi_bootstrap.svg";
import flutterLogo from "../assets/material-symbols_flutter.svg";
import adobeXdLogo from "../assets/logos_adobe-xd.svg";
import figmaLogo from "../assets/material-icon-theme_figma.svg";
import illustratorLogo from "../assets/devicon_illustrator.svg";
import photoshopLogo from "../assets/devicon_photoshop.svg";
import gitLogo from "../assets/devicon_git.svg";
import githubLogo from "../assets/mdi_github.svg";
import seleniumLogo from "../assets/skill-icons_selenium.svg";
import uipathLogo from "../assets/simple-icons_uipath.svg";
import SkillsItem from "./SkillsItem";

const skillImageMap = {
  "logos_html-5.svg": html5Logo,
  "logos_css-3.svg": css3Logo,
  "skill-icons_javascript.svg": javascriptIcon,
  "devicon_jquery-wordmark.svg": jqueryLogo,
  "devicon_vuejs.svg": vuejsLogo,
  "logos_react.svg": reactLogo,
  "devicon_laravel.svg": laravelLogo,
  "material-icon-theme_nodejs.svg": nodejsLogo,
  "devicon_express.svg": expressLogo,
  "simple-icons_mysql.svg": mysqlLogo,
  "mdi_bootstrap.svg": bootstrapLogo,
  "material-symbols_flutter.svg": flutterLogo,
  "logos_adobe-xd.svg": adobeXdLogo,
  "material-icon-theme_figma.svg": figmaLogo,
  "devicon_illustrator.svg": illustratorLogo,
  "devicon_photoshop.svg": photoshopLogo,
  "devicon_git.svg": gitLogo,
  "mdi_github.svg": githubLogo,
  "skill-icons_selenium.svg": seleniumLogo,
  "simple-icons_uipath.svg": uipathLogo,
};
function Skills() {
  return (
    <section id="skills">
      <SkillsItem json={devSkills} map={skillImageMap} id="devSkills" />
      <SkillsItem json={designSkills} map={skillImageMap} id="designSkills" />
      <SkillsItem json={others} map={skillImageMap} id="others" />
    </section>
  );
}

export default Skills;
