export default function Article({ path, alt, author, title, article }) {
  return (
    <article className="flex flex-col bg-pureWhite">
      <img src={path} alt={alt} className="h-[200px] w-full" />
      <p className="text-grayishBlue text-author mt-[25px] px-6">{author}</p>
      <p className="text-articleTitle text-darkBlue mt-2 px-6 hover:text-green">
        {title}
      </p>
      <p className="text-grayishBlue text-article mt-2 mb-6 px-6">{article}</p>
    </article>
  );
}
