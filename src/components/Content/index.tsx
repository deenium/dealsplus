import { useEffect, useState } from "react";
import { AccessTree } from "./AccessTree";
import { Group } from "./Group";
import { Header } from "./Header";
import { MemberList } from "./MemberList";
import { SearchBar } from "./SearchBar";
import { fetchStructures, fetchUsers, type User } from "../../api/mockapi";
import type { PermissionsGroupData } from "../Modal";

interface ContentProps {
  step: number;
  formData: PermissionsGroupData;
  updateFormData: (updates: Partial<PermissionsGroupData>) => void;
}

export const Content: React.FC<ContentProps> = (props) => {
  const { step, formData, updateFormData } = props;
  const [members, setMembers] = useState<User[]>([]);
  const [structures, setStructures] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  // Fetches data based on the current step
  // Step 2 & 3: Fetch structures
  // Step 4: Fetch users
  useEffect(() => {
    if (step === 4) {
      fetchUsers().then((users) => {
        setMembers(users);
      });
    } else if (step === 1) {
      return;
    } else {
      fetchStructures().then((data) => {
        setStructures(data);
      });
    }
  }, [step]);

  // On Search Input
  useEffect(() => {
    if (step === 4) {
      fetchUsers().then((users) => {
        setMembers(
          users.filter((user) =>
            user.user.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      });
    } else if (step === 1) {
      return;
    } else {
      fetchStructures().then((structures) => {
        setStructures(
          structures.filter((structure) =>
            structure.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      });
    }
  }, [searchTerm, step]);

  return (
    <div className="Content">
      {step === 1 ? (
        <Group formData={formData} updateFormData={updateFormData} />
      ) : (
        <>
          <Header
            step={step}
            header={headerText[step - 2]}
            subHeader={subHeaderText[step - 2]}
          />
          <SearchBar
            step={step}
            numberOfNodes={step === 4 ? members.length : structures.length}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          {step === 4 ? (
            <MemberList members={members} />
          ) : (
            <AccessTree step={step} structures={structures} />
          )}
        </>
      )}
    </div>
  );
};
