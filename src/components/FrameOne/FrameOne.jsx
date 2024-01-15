import style from "./FrameOne.module.css";
const FrameOne = () => {
  return (
    <>
    <div className={style.box}>
      <div className={style.container}>
        <div className={style.frame}>
          <div className={style.cont}>
            <p className={style.lessons}>
              <span style={{ color: "#4D4D4D" }} className={style.spn}>Lessons and insights</span>
              <span style={{ color: "#ff645c" }} className={style.spn}>from 8 years</span>
            </p>
            <p>
              Where to grow your buisness as a photographer: site or social
              media?
            </p>
          </div>
          <button className={style.btn}>Register</button>
        </div>
        <div>
          <img src="./images/image1.png" alt="" className={style.image}/>
        </div>
      </div>
      <div className={style.svgs}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <circle cx="5" cy="5" r="5" fill="#FF645C" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <circle opacity="0.3" cx="5" cy="5" r="5" fill="#FF645C" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <circle opacity="0.3" cx="5" cy="5" r="5" fill="#FF645C" />
          </svg>
        </div>
        </div>
    </>
  );
};
export default FrameOne;
