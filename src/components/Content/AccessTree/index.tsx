import "./AccessTree.css";
import { Header } from "./Header";
import { Body } from "./Body";

interface AccessTreeProps {
  step: number;
  structures: string[];
}

export const AccessTree: React.FC<AccessTreeProps> = (props) => {
  const { step, structures } = props;
  return (
    <div className="AccessTree">
      <Header title={step === 3 ? "Entity" : "Structure"} />
      <Body data={structures} />
    </div>
  );
};
