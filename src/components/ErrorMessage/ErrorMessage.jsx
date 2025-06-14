import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ errorText }) => {
  return (
    <>
      <p className={css.errMsg}>There is an error: {errorText}</p>
    </>
  );
};

export default ErrorMessage;
