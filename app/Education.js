import style from "./home.module.css";
const Education = () =>(
    <div>
      <h2 className={style.h2}>Education</h2>
        <p className={style.p}>School: Kennesaw State University</p>		 				            
        <p className={style.p}>Location: Kennesaw, GA</p>
        <p className={style.p}>Degree: Bachelor of Science in Computer Science	</p>		                        
        <p className={style.p}>Duration: August 2019 - May 2023</p>
        <p className={style.p}>GPA: 3.5</p>
    </div>
);
export default Education;