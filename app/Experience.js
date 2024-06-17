import style from "./home.module.css";
import Image from "next/image";
import elogo from "./Equifax.png";
import ologo from "./OncoHealth.jpg";
const Experience = () => (
  <div>
    <h2 className={style.h2}>Work Experience</h2>
    <div class="experience" className={style.div}>
      <h3 className={style.h3}>Experience 1</h3>
      <p class="company" className={style.p}>
        Company: OncoHealth
      </p>
      <Image src={ologo} alt="OncoHealth Logo" width={150} height={80}/>
      <p className={style.p}>Website: <a className = {style.a} href="https://oncohealth.us/" target="_blank">OncoHealth</a></p>
      <p className={style.p}>Location: Atlanta, GA</p>
      <p className={style.p}>Position: Software Engineer</p>
      <p className={style.p}>Duration: August 2023 - December 2023</p>
      <p className={style.p}>Description/responsibilities: </p>
      <ul className={style.ul}>
        <li className={style.li}>
          Spearheaded a live demonstration of enhancements that was made to the
          administration portal to give further insights of new changes that
          will impact the entire organization.
        </li>
        <li className={style.li}>
          Facilitated with the DevOps team to address defects within specific
          environments through app insights live metric functionality to trace
          any failed requests and exceptions.
        </li>
        <li className={style.li}>
          Partnered with the QA Analyst to diligently perform penetration
          testing on pivotal features in order to resolve substantial
          vulnerabilities that potentially may arise within the management
          system.
        </li>
        <li className={style.li}>
          Made use of Azure Functions to deploy a new function in C# to allow
          clinicians/case review specialists to edit, delete, or create drugs in
          the administration portal.
        </li>
        <li className={style.li}>
          Undertook Full Stack development, harnessing .NET with C# and Angular
          with TypeScript to construct, customize, and troubleshoot in the
          administration portal.
        </li>
        <li className={style.li}>
          Designed and developed a notification service using Twilio and Python
          for clinicians when cases pop-up.
        </li>
      </ul>
    </div>
    <br></br>
    <div class="experience" className={style.div}>
      <h3 className={style.h3}>Experience 2</h3>
      <p class="company" className={style.p}>
        Company: OncoHealth
      </p>
      <Image src={ologo} alt="OncoHealth Logo" width={150} height={80}/>
      <p className={style.p}>Website: <a className = {style.a} href="https://oncohealth.us/" target="_blank">OncoHealth</a></p>
      <p className={style.p}>Location: Atlanta, GA</p>
      <p className={style.p}>Position: Software Engineer Intern</p>
      <p className={style.p}>Duration: April 2023 - July 2023</p>
      <p className={style.p}>Description/responsibilities: </p>
      <ul className={style.ul}>
        <li className={style.li}>
          Utilized ASP.NET for the sole purpose of assembling, examining, and
          diagnosing the management system.
        </li>
        <li className={style.li}>
          Generated various SQL Scripts to update essential issues in the
          management system that resulted in a 40% reduction of production
          issues that were reported by internal clients in Zendesk.
        </li>
        <li className={style.li}>
          Resolved over 15+ bugs within the management system that ranged from
          the frontend to the database.
        </li>
        <li className={style.li}>
          Implemented stored procedures in SQL to allow a trigger to happen in
          the .NET service where clients can update drugs with specific units of
          measurement after entering the drug.
        </li>
        <li className={style.li}>
          Coordinated efforts in thorough production reviews to ensure smooth
          functionality of every feature prior to deployment.
        </li>
      </ul>
    </div>
    <br></br>
    <div class="experience" className={style.div}>
      <h3 className={style.h3}>Experience 3</h3>
      <p class="company" className={style.p}>
        Company: Equifax
      </p>
      <Image src={elogo} alt="Equifax Logo" width={150} height={150}/>
      <p className={style.p}>Website: <a className = {style.a} href="https://www.equifax.com/" target="_blank">Equifax</a></p>
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
          Oversaw task prioritization via JIRA for the purpose of emphasizing
          critical system defects.
        </li>
        <li className={style.li}>
          Enhanced line coverage for various services by 80% through the
          formulation of unit tests by the use of JUnit 5.
        </li>
        <li className={style.li}>
          Devised and tested RESTful APIs to facilitate operations for creating,
          updating, reading, and deleting entities.
        </li>
      </ul>
    </div>
  </div>
);

export default Experience;
