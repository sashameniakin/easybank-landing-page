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
    </>
  );
}
