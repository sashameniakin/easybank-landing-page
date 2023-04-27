export default function Menu({ children }) {
  return (
    <div className="absolute top-[80px] bottom-0 left-0 right-0 bg-modalGradient z-50">
      <div className="bg-pureWhite mx-6 mt-6 py-8 gap-6 items-center flex flex-col text-menuText text-darkBlue">
        {children}
      </div>
    </div>
  );
}
