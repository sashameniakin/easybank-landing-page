import Button from "./UI/Button";
import Feature from "./Feature";

export default function MainPart() {
  return (
    <>
      <section className="relative overflow-hidden bg-backGrmiddle">
        <section className="relative flex flex-col-reverse desktop:flex-row bg-backGr desktop:pl-[165px] overflow-hidden">
          <div className="flex flex-col items-center text-center desktop:text-left desktop:items-start w-full desktop:w-1/3 pb-[88px] desktop:py-[170px]">
            <p className="text-H2Mobile desktop:text-h1 mb-4 desktop:mb-6 text-darkBlue px-6 desktop:px-0">
              Next generation digital banking
            </p>
            <p className="text-mainMobile desktop:text-text text-grayishBlue mb-8 desktop:mb-9 px-6 desktop:px-0">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending saving, budgeting, investing, and much
              more.
            </p>
            <Button />
          </div>

          <picture className="desktop:absolute desktop:top-[-255px] desktop:right-[-410px]">
            <source
              media="(min-width:821px)"
              srcSet="./images/bg-intro-desktop.svg"
            />
            <img
              src="./images/bg-intro-mobile.svg"
              alt="intro"
              className="w-full"
            />
          </picture>
        </section>
        <img
          className="absolute top-[-100px] right-[0px] desktop:right-[-110px] z-30 w-full desktop:w-[50%]"
          src="./images/image-mockups.png"
          alt="mockups"
        />
        <div className="flex flex-col px-6 desktop:px-[165px] pt-[64px] desktop:pt-[96px] w-full desktop:w-2/3 pb-[56px] desktop:pb-[72px]">
          <p className="text-H1Mobile desktop:text-h2 text-darkBlue mb-4 text-center desktop:text-left">
            Why choose Easybank?
          </p>
          <p className="text-mainMobile desktop:text-text text-grayishBlue text-center desktop:text-left">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="flex flex-col desktop:flex-row px-6 desktop:px-[165px] gap-8 desktop:gap-[30px] pb-[64px] desktop:pb-[94px]">
          <Feature
            path="./images/icons/icon-online.svg"
            alt="online"
            title="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world."
          />
          <Feature
            path="./images/icons/icon-budgeting.svg"
            alt="budgeting"
            title="Simple Budgeting"
            description="See exactly where your money goes each month. Receive notifications
          when you’re close to hitting your limits."
          />
          <Feature
            path="./images/icons/icon-onboarding.svg"
            alt="onboarding"
            title="Fast Onboarding"
            description="We don’t do branches. Open your account in minutes online and start
          taking control of your finances right away."
          />
          <Feature
            path="./images/icons/icon-api.svg"
            alt="api"
            title="Open API"
            description="Manage your savings, investments, pension, and much more from one
          account. Tracking your money has never been easier."
          />
        </div>
      </section>
    </>
  );
}
