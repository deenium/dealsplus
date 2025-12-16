import { BiSearch } from "react-icons/bi";
import "./Header.css";

interface SearchInputProps {
  step: number;
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { step } = props;
  return (
    <div className="SearchInputFieldWrapper">
      <BiSearch className="SearchInputIcon" />
      <input
        id="group-name-input"
        type="required"
        className="TextInputField SearchInputField"
        placeholder="Search"
      />
    </div>
  );
};
