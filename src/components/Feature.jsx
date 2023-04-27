export default function Feature({ path, alt, title, description }) {
  return (
    <div className="flex flex-col items-center desktop:items-start">
      <img src={path} alt={alt} width="72px" />
      <p className="text-H3Mobile desktop:text-h3 text-darkBlue mt-6 desktop:mt-10 mb-4 desktop:mb-[26px]">
        {title}
      </p>
      <p className="text-center desktop:text-justify text-mainMobile desktop:text-icons text-grayishBlue">
        {description}
      </p>
    </div>
  );
}
