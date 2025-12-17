import type { User } from "../../../api/mockapi";
import type { PermissionsGroupData } from "../../Modal";
import { MemberCard } from "./MemberCard";

interface MemberListProps {
  members: User[];
  formData: PermissionsGroupData;
  updateFormData: (updates: Partial<PermissionsGroupData>) => void;
}

// Step 4: List of users that can be added to the permissions group
export const MemberList: React.FC<MemberListProps> = (props) => {
  const { members, formData, updateFormData } = props;

  // Toggles member selection - adds or removes from group
  const handleToggle = (email: string) => {
    if (formData.members.includes(email)) {
      // Remove member
      const updatedMembers = formData.members.filter(
        (member) => member !== email
      );
      updateFormData({ members: updatedMembers });
    } else {
      // Add member
      const updatedMembers = [...formData.members, email];
      updateFormData({ members: updatedMembers });
    }
  };

  return (
    <div className="MemberList">
      {members.map((user, index) => (
        <MemberCard
          key={`Member_Card_Item_${index}`}
          user={user}
          isToggled={formData.members.includes(user.email)}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};
