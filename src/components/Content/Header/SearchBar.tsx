import Text from "../../../common/Text/Text";
import { SearchInput } from "./SearchInput";

interface SearchBarProps {
  step: number;
  numberOfNodes: number;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { step, numberOfNodes = 0 } = props;
  return (
    <div className="SearchBar">
      <SearchInput step={step} />
      <Text color="gray" className="NumberOfNodes">
        {numberOfNodes}
        {step === 2 ? " structures" : step === 3 ? " entities" : " members"}
      </Text>
    </div>
  );
};
