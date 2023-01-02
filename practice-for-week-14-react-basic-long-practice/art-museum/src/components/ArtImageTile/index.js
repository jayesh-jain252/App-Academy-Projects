import { Link, useParams } from "react-router-dom";
import "./ArtImageTile.css";
export default function ArtImageTile({ art }) {
  const { galleryid } = useParams();

  return (
    <Link to={`/galleries/${galleryid}/art/${art.id}`}>
      <img
        className="gallery-images"
        src={art.primaryimageurl}
        alt={art.description}
      ></img>
    </Link>
  );
}
