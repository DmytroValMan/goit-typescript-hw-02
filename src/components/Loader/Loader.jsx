import { PacmanLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <PacmanLoader className={css.loader} color="#ccf815" size={40} />
    </div>
  );
};

export default Loader;
