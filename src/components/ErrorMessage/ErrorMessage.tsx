import css from "./ErrorMessage.module.css";

type Props = {
  errorText: string;
};

const ErrorMessage = ({ errorText }: Props) => {
  return (
    <>
      <p className={css.errMsg}>There is an error: {errorText}</p>
    </>
  );
};

export default ErrorMessage;
