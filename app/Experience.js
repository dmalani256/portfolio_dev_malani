import style from "./home.module.css";
const Experience = () => (
  <div>
    <h2 className={style.h2}>Work Experience</h2>
    <div class="experience" className={style.div}>
      <h3 className={style.h3}>Experience 1</h3>
      <p class="company" className={style.p}>
        Company: OncoHealth
      </p>
      <p className={style.p}>Location: Atlanta, GA</p>
      <p className={style.p}>Position: Software Engineer</p>
      <p className={style.p}>Duration: August 2023 - December 2023</p>
      <p className={style.p}>Description/responsibilities: </p>
      <ul className={style.ul}>
        <li className={style.li}>
          Spearheaded a live demonstration of enhancements made to the
          administration portal, providing the entire organization with insights
          into new changes.
        </li>
        <li className={style.li}>
          Facilitated with the DevOps team to address defects within specific
          environments using app insights and live metric functionality to trace
          failed requests and exceptions.
        </li>
        <li className={style.li}>
          Partnered with the QA Analyst to conduct penetration testing on
          critical features and address vulnerabilities.
        </li>
        <li className={style.li}>
          Made use of Azure Functions to deploy a new function in C# to allow
          clinicians/case review specialists to edit, delete, or create drugs in
          the administration portal.
        </li>
        <li className={style.li}>
          Undertook Full Stack development, utilizing .NET with C# and Angular
          to construct, customize, and troubleshoot in the Administration
          Portal.
        </li>
        <li className={style.li}>
          Designed and developed a notification service using Twilio and Python
          for clinicians when cases arise.
        </li>
      </ul>
    </div>
    <br></br>
    <div class="experience" className={style.div}>
      <h3 className={style.h3}>Experience 2</h3>
      <p class="company" className={style.p}>
        Company: OncoHealth
      </p>
      <p className={style.p}>Location: Atlanta, GA</p>
      <p className={style.p}>Position: Software Engineer Intern</p>
      <p className={style.p}>Duration: April 2023 - July 2023</p>
      <p className={style.p}>Description/responsibilities: </p>
      <ul className={style.ul}>
        <li className={style.li}>
          Generated various SQL Scripts to update essential issues in the
          Management System, resulting in a 40% reduction of production issues
          reported by internal clients in Zendesk.
        </li>
        <li className={style.li}>
          Coordinated efforts in thorough production reviews to ensure smooth
          functionality of every feature prior to deployment to production.
        </li>
        <li className={style.li}>
          Implemented stored procedures in SQL to trigger actions in the .NET
          service, allowing clients to update drug tables with specific units of
          measurement upon data entry.
        </li>
      </ul>
    </div>
    <br></br>
    <div class="experience" className={style.div}>
      <h3 className={style.h3}>Experience 3</h3>
      <p class="company" className={style.p}>
        Company: Equifax
      </p>
      <p className={style.p}>Location: Alpharetta, GA</p>
      <p className={style.p}>Position: Software Developer Intern</p>
      <p className={style.p}>Duration: February 2021 - August 2021</p>
      <p className={style.p}>Description/responsibilities: </p>
      <ul className={style.ul}>
        <li className={style.li}>
          Worked with Spring Boot to create, validate, and sustain the product
          backend framework.
        </li>
        <li className={style.li}>
          Oversaw task prioritization using JIRA to emphasize critical system
          defects.
        </li>
        <li className={style.li}>
          Enhanced line coverage for various services within the product by
          formulating unit tests using JUnit 5 test cases.
        </li>
        <li className={style.li}>
          Designed and tested RESTful APIs to facilitate unified operations for
          creating, updating, reading, and deleting entities within one of the
          products.
        </li>
      </ul>
    </div>
  </div>
);

export default Experience;
