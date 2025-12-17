import Text from "../../../../common/Text/Text";
import "./Body.css";
import "../AccessTree.css";
import { Checkbox } from "../Checkbox";
import { Popup } from "./Popup";

interface HeaderProps {
  title?: string;
  item?: any;
  reverseIndex?: number;
}

export const Row: React.FC<HeaderProps> = (props) => {
  const { title = "Structure", item, reverseIndex } = props;
  return (
    <div
      className={`AccessTreeRow ${reverseIndex === 1 && "AccessTreeRowLast"}`}
    >
      <Checkbox />
      <Text color="gray-dark" className="AccessTreeText">
        {title}
      </Text>
      <Popup />
    </div>
  );
};
