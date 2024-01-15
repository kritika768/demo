import style from "./FrameThree.module.css";
const FrameThree = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.cont}>
          <div>
            <span className={style.spn}>
              How to design your site footer like we did
            </span>
            <p className={style.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              cursus dolor nunc. Praesent a ornare odio. Phasellus fringilla
              nibh mauris, non dictum lectus tincidunt quis. Aenean nisl quam,
              aliquam eu nisi a, eleifend blandit dui. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vivamus in felis tincidunt,
              porta libero vitae, volutpat est. Phasellus a turpis vel eros
              lobortis egestas ut quis diam. Sed ullamcorper condimentum
              sodales. Pellentesque sodales posuere
            </p>
          </div>
          <div>
            <button className={style.btn}>Learn more</button>
          </div>
        </div>

        <div>
          <img src="./images/image3.png" alt="" className={style.image} />
        </div>
      </div>
      <div className={style.container2}>
        <div className={style.cont2}>
          <span className={style.spn}>Caring is the new marketing</span>
          <p
            className={style.para2}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum
            suspendisse ultrices gravida dictum fusce ut placerat. Viverra
            accumsan in nisl nisi scelerisque eu ultrices vitae.
          </p>
        </div>
       <div className={style.cards}>
        <div >
        <img src="./images/imageC.png" alt="" className={style.imageCard}/>
        </div>
       <div>
        <img src="./images/imageD.png" alt="" className={style.imageCard}/>
       </div>
       <div>
        <img src="./images/imageE.png" alt="" className={style.imageCard}/>
       </div>
      </div>
      </div>
    </>
  );
};

export default FrameThree;
