import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { blog } from "../utils/data";
import { FaArrowLeft } from "react-icons/fa6";

export const loader = ({ params }) => {
  const { id } = params;
  const blogPost = blog.find((item) => item.id === id);
  return { blogPost };
};

const Blog = () => {
  document.title = "Kachi Ugo || Blog";
  const { blogPost } = useLoaderData();
  const {
    id,
    title,
    dateReleased: date,
    category: tag,
    readTime: time,
    post,
  } = blogPost;

  return (
    <section className="section single-page" id="blog-post">
      <div className="section-title single-blog">
        <h2>{title}</h2>
        <div className="underline"></div>
        <div className="blog-data">
          <h4>
            {date} | {tag} | {time}
          </h4>
        </div>
      </div>
      <div className="section-center page-info content-styling">
        {post.map((item) => {
          return <p key={item}>{item}</p>;
        })}

        <hr />
        <Link to="/blog" className="all-articles">
          <span>
            <FaArrowLeft style={{ paddingRight: "0.3rem" }} />
          </span>
          All Blog Posts
        </Link>
      </div>
    </section>
  );
};
export default Blog;
