import Button from "./UI/Button";

export default function Footer() {
  return (
    <footer className="bg-darkBlue">
      <section className="flex px-[165px] py-12 justify-between items-stretch">
        <div className="flex gap-8">
          <div className="flex flex-col justify-between">
            <img src="./images/logo_white.svg" alt="logo" />
            <div className="flex gap-[13.33px]">
              <img src="./images/footer/icon-facebook.svg" alt="facebook" />
              <img src="./images/footer/icon-youtube.svg" alt="youtube" />
              <img src="./images/footer/icon-twitter.svg" alt="twitter" />
              <img src="./images/footer/icon-pinterest.svg" alt="pinterest" />
              <img src="./images/footer/icon-instagram.svg" alt="instagram" />
            </div>
          </div>
          <div className="flex flex-col justify-start text-pureWhite text-footer">
            <p>About us</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col text-pureWhite text-footer">
            <p>Careers</p>
            <p>Support</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <Button />
      </section>
    </footer>
  );
}
