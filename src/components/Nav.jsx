import Button from "./UI/Button";

export default function Nav() {
  return (
    <>
      <header className="flex justify-between items-center px-[165px] h-[80px] bg-pureWhite z-50">
        <img src="./images/logo.svg" alt="logo" />
        <div className="flex gap-[30px] text-menu text-grayishBlue">
          <p className="hover:underline underline-offset-[10px] hover:text-darkBlue">
            Home
          </p>
          <p className="hover:text-darkBlue">About</p>
          <p className="hover:text-darkBlue">Contact</p>
          <p className="hover:text-darkBlue">Blog</p>
          <p className="hover:text-darkBlue">Careers</p>
        </div>
        <Button />
      </header>
      <section className="relative overflow-hidden bg-backGrmiddle">
        <section className="relative flex bg-backGr pl-[165px] overflow-hidden">
          <div className="flex flex-col items-left w-1/3 py-[170px]">
            <p className="text-h1 mb-6">Next generation digital banking</p>
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
        <div className="flex flex-col px-[165px] pt-[96px] w-2/3 my-[72px]">
          <p className="text-h2">Why choose Easybank?</p>
          <p className="text-text text-grayishBlue">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <img
              src="./images/icons/icon-online.svg"
              alt="online"
              width="72px"
            />
            <p>Online Banking</p>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src="./images/icons/icon-budgeting.svg"
              alt="budgeting"
              width="72px"
            />
            <p>Simple Budgeting</p>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src="./images/icons/icon-onboarding.svg"
              alt="onboarding"
              width="72px"
            />
            <p>Fast Onboarding</p>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="flex flex-col">
            <img src="./images/icons/icon-api.svg" alt="api" width="72px" />
            <p>Open API</p>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
