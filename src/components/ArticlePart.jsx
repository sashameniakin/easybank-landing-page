import Article from "./Article";

export default function ArticlePart() {
  return (
    <section className="px-[165px] bg-backGr pb-20">
      <p className="text-h2 text-darkBlue pt-20 pb-10">Latest Articles</p>
      <div className="flex gap-[30px]">
        <Article
          path="./images/articles/image-currency.jpg"
          alt="currency"
          author="By Claire Robinson"
          title="Receive money in any currency with no fees"
          article="The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …"
        />
        <Article
          path="./images/articles/image-restaurant.jpg"
          alt="restaurant"
          author="By Wilson Hutton"
          title="Treat yourself without worrying about money"
          article="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        />
        <Article
          path="./images/articles/image-plane.jpg"
          alt="plane"
          author="By Wilson Hutton"
          title="Take your Easybank card wherever you go"
          article="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        />
        <Article
          path="./images/articles/image-confetti.jpg"
          alt="confetti"
          author="By Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          article="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        />
      </div>
    </section>
  );
}
