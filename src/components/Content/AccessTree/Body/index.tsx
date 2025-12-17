import { Row } from "./Row";
import "./Body.css";

interface BodyProps {
  data: string[];
}

export const Body: React.FC<BodyProps> = (props) => {
  const { data } = props;
  return (
    <div className="AccessTreeBody">
      {data.map((item: string, index: number) => (
        <Row key={index} title={item} index={data.length - index} />
      ))}
    </div>
  );
};
