import Text from "../../../common/Text/Text";
import "./AccessTree.css";
import { Checkbox } from "./Checkbox";
interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { title } = props;
  return (
    <div className="AccessTreeHeader">
      <Checkbox />
      <Text variant="sm" className="AccessTreeText">
        {title}
      </Text>
      <Text variant="sm" className="AccessTreeRole">
        Role
      </Text>
    </div>
  );
};
