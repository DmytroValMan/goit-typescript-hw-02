import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type Props = {
  images: Image[];
  onImageClick: (image: Image) => void;
};

const ImageGallery = ({ images, onImageClick }: Props) => {
  return (
    <ul className={css.list}>
      {images.map((image) => {
        return (
          <li
            className={css.item}
            key={image.id}
            onClick={() => onImageClick(image)}
          >
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
