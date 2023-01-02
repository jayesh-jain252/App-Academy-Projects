import ArtImageTile from "../ArtImageTile";
import { Route, useParams } from "react-router-dom";
import ArtDescription from "../ArtDescription";
import "../ArtImageTile/ArtImageTile.css";
import "./GalleryView.css";

export default function GalleryView({ galleries }) {
  const { galleryId } = useParams();

  const gallery = galleries.find(
    (gallery) => gallery.gallerynumber === galleryId
  );
  return (
    <div className="background">
      <h1 className="harvard-header"> Harvard Art Gallery</h1>
      <h2 className="gallery-name">{gallery.name}</h2>

      <Route exact path={`/galleries/:galleryid`}>
        <div className="gallery-image-div">
          <div className="gallery-image-grid">
            {gallery.objects.map((art, i) => {
              return (
                <div id={`image-grid-container-${i}`}>
                  <ArtImageTile key={art.id} art={art} galleryId={galleryId} />
                </div>
              );
            })}
          </div>
        </div>
      </Route>
      <Route path={`/galleries/:galleryId/art/:artId`}>
        <ArtDescription gallery={gallery} />
      </Route>
    </div>
  );
}
