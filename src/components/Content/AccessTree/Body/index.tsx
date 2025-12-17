import { Row } from "./Row";
import "./Body.css";

interface BodyProps {
  data: any;
}

export const Body: React.FC<BodyProps> = (props) => {
  const { data } = props;
  console.log("data", data);
  return (
    <div className="AccessTreeBody">
      <Row item={1} />
    </div>
  );
};
