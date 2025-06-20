import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

type Props = {
  onSearch: (newRequest: string, isNewRequest: boolean) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const value = formData.get("text") as string;

    const inputValue = value.trim();
    !inputValue && toast("You should write some request first!");
    onSearch(inputValue, true);

    evt.currentTarget.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
