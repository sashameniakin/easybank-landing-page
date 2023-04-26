export default function Feature({ path, alt, title, description }) {
  return (
    <div className="flex flex-col items-center desktop:items-start">
      <img src={path} alt={alt} width="72px" />
      <p className="text-h3 text-darkBlue mt-10 mb-[26px]">{title}</p>
      <p className="text-center desktop:text-justify text-icons text-grayishBlue">
        {description}
      </p>
    </div>
  );
}
