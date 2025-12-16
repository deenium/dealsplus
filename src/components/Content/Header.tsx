import Text from "../../common/Text/Text";
import "./Content.css";

interface HeaderProps {
  step: number;
  header: string;
  subHeader: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { step, header, subHeader } = props;
  return (
    <div className="Header">
      <Text variant="lg" color="gray-dark">
        {header}
      </Text>
      <Text color="gray">{subHeader}</Text>{" "}
    </div>
  );
};
