import Image from "next/image";
import styles from "./page.module.css";
const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.navTop}>
          <nav>
            <ul className={styles.navList}>
              <li>
                <a href="/">Главная</a>
              </li>
              <li>
                <a href="/about">О нас</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>


      <div className={styles.container}>
        <section className={styles.aboutSection}>
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <iframe
                width="605"
                height="425"
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameBorder="0"
                allowFullScreen
                className={styles.videoFrame}
              ></iframe>
            </div>

            <div className={styles.backgroundImages}>
              <div className={styles.image1}>
                <Image
                  src="/bg-video.png"
                  alt="Image 1"
                  width={95}
                  height={112}
                />
              </div>
              <div className={styles.image2}>
                <Image
                  src="/bg-video.png"
                  alt="Previous"
                  width={95}
                  height={112}
                />
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <div>
            <h2>O НАС</h2>
            <div className={styles.companyBlock}>
              <p className={styles.company}>Компания</p>
              <div className={styles.companyName}>G<span>olden Soft</span></div>
            </div>
            <p className={styles.descriptionText}>
              Sit tempor ante justo amet duis. Ultricies cras eleifend elit,<br />
              posuere et risus non. Id et ut pellentesque consequat, amet<br /> erat
              gravida euismod pharetra.
            </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
