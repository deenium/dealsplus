import Text from "../../common/Text/Text";
import "./Content.css";

interface HeaderProps {
  header: string;
  subHeader: string;
}

// Content header with main title and supporting subtitle
export const Header: React.FC<HeaderProps> = (props) => {
  const { header, subHeader } = props;
  return (
    <div className="Header">
      {/* Main instruction text */}
      <Text variant="lg" color="gray-dark">
        {header}
      </Text>
      <Text color="gray">{subHeader}</Text>{" "}
    </div>
  );
};
