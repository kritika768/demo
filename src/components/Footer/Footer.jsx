import style from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.cont1}>
          <div>
            <img src="./images/dark.png" alt="" />
          </div>
          <div className={style.spns}>
            <span>Copyright &copy; Nexcent ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className={style.icons}>
            <img src="./images/Social1.png" alt="" />
            <img src="./images/Social2.png" alt="" />
            <img src="./images/Social3.png" alt="" />
            <img src="./images/Social4.png" alt="" />
          </div>
        </div>

        <div className={style.cont2}>
          <div className={style.col}>
            <div className={style.company}>
              <span>Company</span>
            </div>
            <div className={style.about}>
              <span>About us</span>
              <span>Blog</span>
              <span>Contact us</span>
              <span>Pricing</span>
              <span>Testimonials</span>
            </div>
          </div>

          <div className={style.col}>
            <div className={style.company}>
              <span>Support</span>
            </div>
            <div className={style.about}>
              <span>Help center</span>
              <span>Terms of services</span>
              <span>Legal</span>
              <span>Privacy policy</span>
              <span>Status</span>
            </div>
          </div>

          <div className={style.col}>
            <div className={style.company}>
              <span>Stay up to date</span>
            </div>
            <div className={style.inp}>
              <input type="text" placeholder="Your email address" />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="white"
                style={{color:"#d9dbe1"}}
              >
                <g clip-path="url(#clip0_1_2143)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2143">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
