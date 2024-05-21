import style from "./home.module.css";
const Experience = () => (
    <div>
      <h2 className={style.h2}>Work Experience</h2>
      <div class="experience" className={style.div}>
        <h3 className={style.h3}>Experience 1</h3>
        <p class="company" className={style.p}>Company: OncoHealth</p>
        <p className={style.p}>Location: Atlanta, GA</p>
        <p className={style.p}>Position: Software Engineer</p>
        <p className={style.p}>Duration: August 2023 - December 2023</p>
        <p className={style.p}>Description/responsibilities: </p>
        <ul className={style.ul}>
          <li className={style.li}>
            Collaborated with a team of developers to ensure compliance with client
            specifications throughout the application's development,
            customization, and debugging phases.
          </li>
          <li className={style.li}>
            Established a systematic approach to coding, testing, and deployment
            via Azure Pipelines across diverse environments, enabling developers
            to validate their modifications effectively.
          </li>
          <li className={style.li}>
            Utilized MSSQL to develop and adapt SQL tables, meeting both client
            and engineering requirements seamlessly.
          </li>
          <li className={style.li}>
            Collaborated with the DevOps team to rectify defects in specific
            environments using app insights, leveraging live metric functionality
            to identify failed requests and exceptions promptly.
          </li>
          <li className={style.li}>
            Partnered with the QA Analyst to perform penetration testing on
            critical features and address any vulnerabilities detected.
          </li>
          <li className={style.li}>
            Deployed a new C# function using Azure Functions to empower
            clinicians/case review specialists to manage drugs, including editing,
            deleting, and creating entries.
          </li>
        </ul>
      </div>
      <br></br>
      <div class="experience" className={style.div}>
        <h3 className={style.h3}>Experience 2</h3>
        <p class="company" className={style.p}>Company: OncoHealth</p>
        <p className={style.p}>Location: Atlanta, GA</p>
        <p className={style.p}>Position: Software Engineer Intern</p>
        <p className={style.p}>Duration: April 2023 - July 2023</p>
        <p className={style.p}>Description/responsibilities: </p>
        <ul className={style.ul}>
          <li className={style.li}>
            Effectively managed task prioritization using Azure DevOps work
            boards, prioritizing the swift resolution of system abnormalities
            throughout the sprint.
          </li>
          <li className={style.li}>
            Collaborated with the production support team to implement necessary
            changes within the Management System.
          </li>
          <li className={style.li}>
            Developed SQL Scripts to address essential issues in the Management
            System, resulting in a 40% reduction in reported production issues
            from internal clients.
          </li>
          <li className={style.li}>
            Engaged in Full Stack development, employing .NET with C# and Angular
            to construct, customize, and troubleshoot in the Administration
            Portal.
          </li>
          <li className={style.li}>
            Coordinated comprehensive production reviews to ensure seamless
            functionality of every feature prior to deployment.
          </li>
          <li className={style.li}>
            Utilized Agile Methodology to drive efficient project execution and
            foster collaborative teamwork.
          </li>
        </ul>
      </div>
      <br></br>
      <div class="experience" className={style.div}>
        <h3 className={style.h3}>Experience 3</h3>
        <p class="company" className={style.p}>Company: Equifax</p>
        <p className={style.p}>Location: Alpharetta, GA</p>
        <p className={style.p}>Position: Software Developer Intern</p>
        <p className={style.p}>Duration: February 2021 - August 2021</p>
        <p className={style.p}>Description/responsibilities: </p>
        <ul className={style.ul}>
          <li className={style.li}>
            Employed Spring Boot to develop, validate, and maintain the backend
            framework of the product.
          </li>
          <li className={style.li}>
            Oversaw task prioritization using JIRA for the purpose of emphasizing
            critical system defects.
          </li>
          <li className={style.li}>
            Utilized the SonarQube platform for identifying and promptly remedying
            any vulnerabilities and bugs within the application.
          </li>
          <li className={style.li}>
            Enhanced line coverage for various services within the product through
            formulation of unit test by employing JUnit 5 test cases.
          </li>
          <li className={style.li}>
            Designed RESTful APIs to facilitate seamless operations for creating,
            updating, reading, and deleting entities within the product ecosystem.
          </li>
          <li className={style.li}>
            Conducted comprehensive testing of RESTful APIs utilizing the Postman
            platform to verify the accurate execution of each endpoint.
          </li>
          <li className={style.li}>
            Implemented Agile Methodology with the Scrum framework, to drive
            project success and team collaboration.
          </li>
        </ul>
      </div>
    </div>
  );
  
  export default Experience;
  