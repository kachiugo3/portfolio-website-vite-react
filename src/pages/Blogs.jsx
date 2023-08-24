import { FaHashtag } from "react-icons/fa6";
import { blog } from "../utils/data";
import { Link } from "react-router-dom";

let allCategories = blog.map((post) => {
  return post.category;
});
allCategories = [...new Set(allCategories)];

const Blogs = () => {
  document.title = "Kachi Ugo || Blog";
  return (
    <>
      <header className="projects-hero">
        <div className="section-title">
          <h1>my blog</h1>
          <div className="underline"></div>
        </div>
      </header>
      <section className="section">
        <div className="section-center blog-page">
          <div className="blog-page-center">
            {blog.map(
              ({
                id,
                featureImage: img,
                title,
                blurb,
                authorImage,
                readTime,
              }) => {
                return (
                  <div key={id} className="card">
                    <div className="card-side card-front blog">
                      <img src={img} alt={title} />
                      <div className="card-info">
                        <h4>{title}</h4>
                        <p>{blurb}</p>
                        <div className="card-footer">
                          <img src={authorImage} alt="author image" />
                          <p>{readTime}</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-side card-back">
                      <Link to={`/blog/${id}`}>
                        <button className="btn">read more</button>
                      </Link>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <aside className="blog-categories">
            {allCategories.map((item) => {
              return (
                <p key={item}>
                  <span>
                    <FaHashtag />
                  </span>
                  {item}
                </p>
              );
            })}
          </aside>
        </div>
      </section>
    </>
  );
};
export default Blogs;
