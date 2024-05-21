import style from "./home.module.css";
import Image from "next/image";
import about_img from "./snipping.jpg";
const About = () => (
  <div>
    <Image src={about_img} alt="About me image" width={210} height={250} />
    <h2 className={style.h2}>About me</h2>
    <p className={style.p}>Hello, </p>
    <p className={style.p}>
      My name is Dev Malani, I am Junior Software Engineer with one year
      of experience gained through internships and professional engagements. I
      hold a bachelor’s degree in computer science from Kennesaw State
      University and am proficient in Java, Python, C#, JavaScript, TypeScript,
      GitHub, Postman, AWS, and Azure. My passion for full-stack web development
      was sparked during my role at OncoHealth, a healthcare company
      specializing in case management for cancer patients, where I enhanced
      website functionality using ASP.NET, .NET Core, Angular, and Microsoft SQL
      Server. I also interned at Equifax, where I built and tested API endpoints
      using Spring, GitHub, SonarQube, JIRA, and Postman. Eager to further my
      skills, I am excited about the opportunity to join your team and
      contribute to its success. For more about me, please see my Skills,
      Experience, and Education tabs.
    </p>
  </div>
);

export default About;
