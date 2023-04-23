import Button from "./UI/Button";
import Feature from "./Feature";

export default function MainPart() {
  return (
    <>
      <section className="relative overflow-hidden bg-backGrmiddle">
        <section className="relative flex bg-backGr pl-[165px] overflow-hidden">
          <div className="flex flex-col items-left w-1/3 py-[170px]">
            <p className="text-h1 mb-6 text-darkBlue">
              Next generation digital banking
            </p>
            <p className="text-text text-grayishBlue mb-9">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending saving, budgeting, investing, and much
              more.
            </p>
            <Button />
          </div>

          <img
            className="absolute top-[-255px] right-[-410px] z-30"
            src="./images/bg-intro-desktop.svg"
            alt="intro"
          />
        </section>
        <img
          className="absolute top-[-100px] right-[-110px] z-30 w-[50%]"
          src="./images/image-mockups.png"
          alt="mockups"
        />
        <div className="flex flex-col px-[165px] pt-[96px] w-2/3 pb-[72px]">
          <p className="text-h2 text-darkBlue">Why choose Easybank?</p>
          <p className="text-text text-grayishBlue">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="flex px-[165px] gap-[30px] pb-[94px]">
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
      <section className="px-[165px]">
        <p className="text-h2 text-darkBlue pt-20 pb-10">Latest Articles</p>
        <div className="flex gap-[30px]">
          <article>
            <div className="flex flex-col"></div>
          </article>
          <article></article>
          <article></article>
          <article></article>
        </div>
      </section>
    </>
  );
}
