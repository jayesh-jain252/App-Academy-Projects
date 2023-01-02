import "./SingleArticle.css";
import { useParams } from "react-router-dom";

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  let targetArticle = articles.find((article) => article.id === id);

  console.log(targetArticle);
  return (
    <div className="singleArticle">
      <h1>{targetArticle.title}</h1>
      <img src={targetArticle.imageUrl} alt={targetArticle.title} />
      <p>{targetArticle.body}</p>
    </div>
  );
};

export default SingleArticle;
