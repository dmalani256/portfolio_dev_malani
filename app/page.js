'use client'
import { useState } from 'react';
import Skills from './components/Skill';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Image from "next/image";
import styles from "./page.module.css";
import style from "./home.module.css";


export default function Home() {
  const [tab, setTab] = useState("about");
  const renderTabContent = () => {
    switch (tab) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      default:
        return null;
    }
  };
  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <button className={style.tabButton} onClick={() => setTab('about')}>About</button>
        <button className={style.tabButton} onClick={() => setTab('skills')}>Skills</button>
        <button className={style.tabButton} onClick={() => setTab('experience')}>Experience</button>
        <button className={style.tabButton} onClick={() => setTab('education')}>Education</button>
      </nav>
      <div className={style.content}>
        {renderTabContent()}
      </div>
    </div>
  );
}
