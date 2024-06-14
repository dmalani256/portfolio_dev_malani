import style from "./home.module.css";
import Image from "next/image";
import degree from './degree.jpg';
const Education = () => (
  <div className={style.div}>
    <h2 className={style.h2}>Education</h2>
    <p className={style.p}>School: Kennesaw State University</p>
    <p className={style.p}>Location: Kennesaw, GA</p>
    <p className={style.p}>Degree: Bachelor of Science in Computer Science </p>
    <p className={style.p}>Duration: August 2019 - May 2023</p>
    <p className={style.p}>GPA: 3.5</p>
    <p className={style.p}>Status: Completed</p>
    <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={degree} alt="Degree image" width={553.6} height={434.4} />
    </div>
  </div>

);
export default Education;
