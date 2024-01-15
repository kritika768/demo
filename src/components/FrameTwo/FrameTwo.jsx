import  style from './FrameTwo.module.css';

const FrameTwo = () => {
  return (
    <>
      <div className={style.container}>
        <div>
          <img src="./images/image2.png" alt="" className={style.image} />
        </div>
        <div className={style.cont}>
          <div>
            <span className={style.spn}>The unseen of spending three years at pixelgrade</span>
            <p className={style.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute 
            </p>
          </div>
          <div>
            <button className={style.btn}>
                Learn more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwo;
