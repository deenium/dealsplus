import { BiSearch } from "react-icons/bi";
import "./SearchBar.css";

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

// Search input field with character limit (max 50 chars)
export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { searchTerm, setSearchTerm } = props;

  // Updates search term on input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
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
