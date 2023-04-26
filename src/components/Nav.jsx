import Button from "./UI/Button";

export default function Nav() {
  return (
    <>
      <header className="flex justify-between items-center px-[165px] h-[80px] bg-pureWhite z-50">
        <img src="./images/logo.svg" alt="logo" />
        <div className="flex gap-[30px] text-menu text-grayishBlue">
          <p className="hover:underline decoration-green decoration-4 underline-offset-[28px] hover:text-darkBlue hover:cursor-pointer">
            Home
          </p>
          <p className="hover:underline decoration-green decoration-4 underline-offset-[28px] hover:text-darkBlue hover:cursor-pointer">
            About
          </p>
          <p className="hover:underline decoration-green decoration-4 underline-offset-[28px] hover:text-darkBlue hover:cursor-pointer">
            Contact
          </p>
          <p className="hover:underline decoration-green decoration-4 underline-offset-[28px] hover:text-darkBlue hover:cursor-pointer">
            Blog
          </p>
          <p className="hover:underline decoration-green decoration-4 underline-offset-[31px] hover:text-darkBlue hover:cursor-pointer">
            Careers
          </p>
        </div>
        <Button />
      </header>
    </>
  );
}
