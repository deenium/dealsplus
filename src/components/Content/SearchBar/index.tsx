import Text from "../../../common/Text/Text";
import { SearchInput } from "./SearchInput";
import "./SearchBar.css";

interface SearchBarProps {
  step: number;
  numberOfNodes: number;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

// Search bar with filter and results counter for structures/entities/members
export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { step, numberOfNodes = 0, ...rest } = props;
  return (
    <div className="SearchBar">
      <SearchInput {...rest} />
      {/* Displays count: "X structures", "X entities", or "X members" */}
      <Text color="gray" className="NumberOfNodes">
        {numberOfNodes}
        {step === 2 ? " structures" : step === 3 ? " entities" : " members"}
      </Text>
    </div>
  );
};
