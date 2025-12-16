import { AccessTree } from "./AccessTree";
import { Group } from "./Group";
import { Header } from "./Header";
import { MemberList } from "./MemberList";
import { SearchBar } from "./SearchBar";

interface ContentProps {
  step: number;
}

export const Content: React.FC<ContentProps> = (props) => {
  const { step } = props;

  const headerText = [
    "Which structures would you like to grant access to?",
    "Which entities would you like to grant access to?",
    "Would you like to add anyone to the new group now?",
  ];

  const subHeaderText = [
    "Access is required to at least one structure",
    "Entity roles have been inherited from structure roles",
    "You can skip this and add members later if you wish",
  ];

  return (
    <div className="Content">
      {step === 1 ? (
        <Group />
      ) : (
        <>
          <Header
            step={step}
            header={headerText[step - 2]}
            subHeader={subHeaderText[step - 2]}
          />
          <SearchBar step={step} numberOfNodes={43} />
          {step === 4 ? <MemberList /> : <AccessTree step={step} />}
        </>
      )}
    </div>
  );
};
