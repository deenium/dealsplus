import "./Content.css";

interface AccessTreeProps {
  step?: number;
}

export const AccessTree: React.FC<AccessTreeProps> = (props) => {
  const { step } = props;
  return <div className="AccessTree">Access Tree Component</div>;
};
