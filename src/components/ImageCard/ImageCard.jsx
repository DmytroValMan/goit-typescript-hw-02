import css from "./ImageCard.module.css";

const ImageCard = ({
  image: {
    urls: { small },
    description,
  },
}) => {
  return (
    <div className={css.imgWrapper}>
      <img className={css.img} src={small} alt={description} />
    </div>
  );
};
export default ImageCard;
