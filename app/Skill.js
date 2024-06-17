import style from "./home.module.css";
const Skills = () => (
  <div>
    <h2 className={style.h2}>Skills</h2>
    <ul className={style.ul}>
      <li className={style.li}>
        Programming Languages: Java, Python, C#, GraphQL, Golang, JavaScript,
        TypeScript, SQL
      </li>
      <li className={style.li}>Cloud: Amazon Web Service (AWS), Azure</li>
      <li className={style.li}>Databases: MongoDB, PostgreSQL, MySQL, MSSQL</li>
      <li className={style.li}>
        Frameworks: Spring, React, Angular, .NET, Django, NextJS, ASP.NET
      </li>
      <li className={style.li}>
        Platform/Tools: SonarQube, JIRA, Postman, Jenkins, Azure DevOps,
        Confluence, Git, GitHub, Docker, Kubernetes
      </li>
    </ul>
  </div>
);

export default Skills;
