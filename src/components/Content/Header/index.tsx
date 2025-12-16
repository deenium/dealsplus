import Text from "../../../common/Text/Text";
import "./Header.css";
import { SearchBar } from "./SearchBar";

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
      <SearchBar step={step} numberOfNodes={numberOfNodes} />
    </div>
  );
};
