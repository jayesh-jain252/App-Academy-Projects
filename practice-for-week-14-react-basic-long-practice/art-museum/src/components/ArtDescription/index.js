import { useParams, Link } from "react-router-dom";
import "./ArtDescription.css";
export default function ArtDescription({ gallery }) {
  const { artId } = useParams();
  console.log(artId);
  console.log(gallery.objects);
  const artwork = gallery.objects.find((artwork) => {
    console.log(artwork);
    // console.log(artwork["objectid"])
    return artwork["id"] === parseInt(artId);
  });
  return (
    <div>
      <Link id="return-to-gallery" to={`/galleries/${gallery.gallerynumber}`}>
        Back to Gallery: {gallery.name}
      </Link>
      <div>
        <div className="image-div">
          {artwork.images.map((image) => {
            return (
              <img
                className="artwork-images"
                src={image.baseimageurl}
                alt={image.alt}
              ></img>
            );
          })}
        </div>
        <div className="artwork-details">
          <p className="redirect-description">
            Click here for more info:{" "}
            <a className="artwork-link" href={gallery.url}>
              "{artwork.title}"
            </a>
          </p>
          <p className="artwork-title">
            Description:{" "}
            <span className="artwork-text">{artwork.description}</span>
          </p>
          <p className="artwork-title">
            Credit: <span className="artwork-text"> {artwork.creditline}</span>
          </p>
          <p className="artwork-title">
            Technique: <span className="artwork-text">{artwork.technique}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
