import "./AccessTree.css";
import { Header } from "./Header";
import { Body } from "./Body";

interface AccessTreeProps {
  step?: number;
}

export const AccessTree: React.FC<AccessTreeProps> = (props) => {
  const { step } = props;
  const data = [1, 2, 3, 4];
  return (
    <div className="AccessTree">
      <Header title={step === 3 ? "Entity" : "Structure"} />
      <Body data={data} />
    </div>
  );
};
