import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <div className={css.btnWrapper}>
      <button className={css.btn} type="submit" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
