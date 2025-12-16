import Text from "../../../common/Text/Text";
import "./Header.css";
import { SearchInput } from "./SearchInput";

interface HeaderProps {
  step: number;
  header: string;
  subHeader: string;
  numberOfNodes: number;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { step, header, subHeader, numberOfNodes = 0 } = props;
  return (
    <div className="Header">
      <Text variant="lg" color="gray-dark">
        {header}
      </Text>
      <Text color="gray">{subHeader}</Text>
      <div className="SearchBar">
        <SearchInput step={step} />
        <Text color="gray" className="NumberOfNodes">
          {numberOfNodes}
          {step === 2 ? " structures" : step === 3 ? " entities" : " members"}
        </Text>
      </div>
    </div>
  );
};
