import { Row } from "./Row";
import "./Body.css";

interface BodyProps {
  data: any;
}

export const Body: React.FC<BodyProps> = (props) => {
  const { data } = props;
  return (
    <div className="AccessTreeBody">
      {data.map((item: any, index: number) => (
        <Row key={index} item={item} reverseIndex={data.length - index} />
      ))}
    </div>
  );
};
