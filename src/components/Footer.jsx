import Button from "./UI/Button";

export default function Footer() {
  return (
    <footer className="bg-darkBlue">
      <section className="flex flex-col desktop:flex-row px-[78px] desktop:px-[165px] py-12 justify-center desktop:justify-between items-center">
        <div className="flex flex-col desktop:flex-row desktop:gap-[140px]">
          <div className="flex flex-col justify-between">
            <img src="./images/logo_white.svg" alt="logo" />
            <div className="flex gap-[13.33px] my-8 desktop:my-0">
              <img
                src="./images/footer/icon-facebook.svg"
                alt="facebook"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "./images/footer/icon-facebook-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./images/footer/icon-facebook.svg")
                }
                className="hover: cursor-pointer"
              />
              <img
                src="./images/footer/icon-youtube.svg"
                alt="youtube"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "./images/footer/icon-youtube-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./images/footer/icon-youtube.svg")
                }
                className="hover: cursor-pointer"
              />
              <img
                src="./images/footer/icon-twitter.svg"
                alt="twitter"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "./images/footer/icon-twitter-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./images/footer/icon-twitter.svg")
                }
                className="hover: cursor-pointer"
              />
              <img
                src="./images/footer/icon-pinterest.svg"
                alt="pinterest"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "./images/footer/icon-pinterest-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./images/footer/icon-pinterest.svg")
                }
                className="hover: cursor-pointer"
              />
              <img
                src="./images/footer/icon-instagram.svg"
                alt="instagram"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "./images/footer/icon-instagram-green.svg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./images/footer/icon-instagram.svg")
                }
                className="hover: cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col items-center desktop:items-start text-pureWhite text-footer mb-2 desktop:mb-0 gap-2">
            <p className="hover:text-green cursor-pointer">About us</p>
            <p className="hover:text-green cursor-pointer">Contact</p>
            <p className="hover:text-green cursor-pointer">Blog</p>
          </div>
          <div className="flex flex-col items-center desktop:items-start text-pureWhite text-footer gap-2 mb-8 desktop:mb-0">
            <p className="hover:text-green cursor-pointer">Careers</p>
            <p className="hover:text-green cursor-pointer">Support</p>
            <p className="hover:text-green cursor-pointer">Privacy Policy</p>
          </div>
        </div>
        <div className="flex flex-col items-center desktop:items-end">
          <Button />
          <p className="text-pureWhite opacity-50 text-footer pt-6">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
}
