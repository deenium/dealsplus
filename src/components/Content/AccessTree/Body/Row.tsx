import Text from "../../../../common/Text/Text";
import "./Body.css";
import { Checkbox } from "../Checkbox";
import { FaChevronDown } from "react-icons/fa6";

interface HeaderProps {
  title?: string;
  item?: any;
}

export const Row: React.FC<HeaderProps> = (props) => {
  const { title = "Structure", item } = props;
  return (
    <div className="AccessTreeRow">
      <Checkbox />
      <Text variant="sm" className="AccessTreeText">
        {title}
      </Text>
      <Text variant="sm" className="AccessTreeRole">
        Role
      </Text>
      <FaChevronDown />
    </div>
  );
};
