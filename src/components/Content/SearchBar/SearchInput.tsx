import { BiSearch } from "react-icons/bi";
import "./SearchBar.css";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { searchTerm, setSearchTerm } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.value.length > 50) return;
    setSearchTerm(event.target.value);
  };

  return (
    <div className="SearchInputFieldWrapper">
      <BiSearch className="SearchInputIcon" />
      <input
        id="group-name-input"
        type="required"
        className="TextInputField SearchInputField"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};
