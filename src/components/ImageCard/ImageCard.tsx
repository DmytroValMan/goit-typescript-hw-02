import { Image } from "../../types";
import css from "./ImageCard.module.css";

type Props = { image: Image };

const ImageCard = ({
  image: {
    urls: { small },
    description,
  },
}: Props) => {
  return (
    <div className={css.imgWrapper}>
      <img className={css.img} src={small} alt={description} />
    </div>
  );
};
export default ImageCard;
