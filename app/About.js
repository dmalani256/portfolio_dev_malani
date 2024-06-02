import style from "./home.module.css";
import Image from "next/image";
import about_img from "./snipping.jpg";
const About = () => (
  <div>
    <Image src={about_img} alt="About me image" width={210} height={250} />
    <h2 className={style.h2}>About me</h2>
    <p className={style.p}>Hello, </p>
    <p className={style.p}>
      My name is Dev Malani, I am a Junior Software Engineer with one years
      worth of experience in Software Engineer and Development that was gained
      through internships and professional engagements. I hold a bachelor’s
      degree in computer science from Kennesaw State University and am
      proficient in various programming languages and technologies such as Java,
      Python, C#, JavaScript, TypeScript, GitHub, Postman, AWS, and Azure. My
      passion fall into the full-stack web development realm which sparked
      during my role at OncoHealth as a Software Engineer. My primary
      responsibility at OncoHealth was to work closely with the review specialists 
      to enhance our website's functionality and/or any updates needed for the cases. 
      Some technologies that I have used at OncoHealth, includes both ASP.NET and .NET 
      core with C#, Angular,and Microsoft SQL Server for full-stack purposes, Zendesk for production
      support, Azure for Cloud Infrastructure, and Azure DevOps for source
      control, CI/CD, and task prioritization. On the contrary, I had the
      privilege to intern at Equifax as a Software Developer. My primary 
      responsibility was mainly to test and build API endpoints and create
      test cases for certain services. Some technologies that I have used at
      Equifax are Spring using Java, GitHub for source control, SonarQube for
      software management, JIRA for task prioritization, and Postman for testing
      API endpoints. I am eager to further my skills in this dynamic field as it
      is one of the few fields that is ever so growing with new technologies
      emerging everyday. To learn more about me, please visit the Skills,
      Experience, and Education tabs that is displayed at the top of the page.
    </p>
  </div>
);

export default About;
