import Text from "../../../common/Text/Text";
import "./AccessTree.css";
import { Checkbox } from "./Checkbox";
interface HeaderProps {
  title: string;
}

// Header row for AccessTree with select-all checkbox
export const Header: React.FC<HeaderProps> = (props) => {
  const { title } = props;
  return (
    <div className="AccessTreeHeader">
      <Checkbox />
      {/* Dynamic title: "Structure" or "Entity" */}
      <Text variant="sm" className="AccessTreeText">
        {title}
      </Text>
      <Text variant="sm" className="AccessTreeRole">
        Role
      </Text>
    </div>
  );
};
