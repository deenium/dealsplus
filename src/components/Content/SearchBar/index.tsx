import Text from "../../../common/Text/Text";
import { SearchInput } from "./SearchInput";
import "./SearchBar.css";

interface SearchBarProps {
  step: number;
  numberOfNodes: number;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { step, numberOfNodes = 0, ...rest } = props;
  return (
    <div className="SearchBar">
      <SearchInput {...rest} />
      <Text color="gray" className="NumberOfNodes">
        {numberOfNodes}
        {step === 2 ? " structures" : step === 3 ? " entities" : " members"}
      </Text>
    </div>
  );
};
