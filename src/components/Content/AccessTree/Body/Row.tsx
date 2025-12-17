import Text from "../../../../common/Text/Text";
import "./Body.css";
import "../AccessTree.css";
import { Checkbox } from "../Checkbox";
import { Popup } from "./Popup";

interface HeaderProps {
  title: string;
  index: number;
}

export const Row: React.FC<HeaderProps> = (props) => {
  const { title = "Structure", index } = props;
  return (
    <div className={`AccessTreeRow`}>
      <Checkbox />
      <Text color="gray-dark" className="AccessTreeText">
        {title}
      </Text>
      <Popup />
    </div>
  );
};
