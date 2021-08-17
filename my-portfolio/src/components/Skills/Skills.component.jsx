import { RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import { SiCss3, SiRedux, SiMongodb } from "react-icons/si";
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
    { icon: <SiMongodb /> },
    { icon: <AiFillGithub /> },
    { icon: "Express", fontSize: "1.4rem" }
  ];
  return mySkills.map((skill, index) => (
    <span className="skills-icon" style={{fontSize: skill.fontSize}} key={index}>{skill.icon}</span>
  ));
};
export default Skills;
