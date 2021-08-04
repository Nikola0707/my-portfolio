import { RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import { SiCss3, SiRedux } from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
// import { DiMongodb} from "react-icons/di";

const Skills = () => {
  let mySkills = [
    { icon: <RiHtml5Fill /> },
    { icon: <SiCss3 /> },
    { icon: <IoLogoJavascript /> },
    { icon: <RiReactjsLine /> },
    { icon: <SiRedux /> },
    { icon: <IoLogoNodejs /> },
    { icon: "Express" },
    { icon: "MongoDB" },
    { icon: <AiFillGithub /> },
    // { icon: <DiMongodb /> },
  ];
  return mySkills.map((skill, index) => (
    <span className="skills-icon" key={index}>{skill.icon}</span>
  ));
};
export default Skills;
