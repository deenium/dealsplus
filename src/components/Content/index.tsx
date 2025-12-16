import { GroupName } from "./GroupName";

interface ContentProps {
  step?: number;
}

export const Content: React.FC<ContentProps> = (props) => {
  const { step } = props;
  return (
    <div className="Content">{step === 1 ? <GroupName /> : <>lorem500</>}</div>
  );
};
