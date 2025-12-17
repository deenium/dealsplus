import type { User } from "../../../api/mockapi";
import { MemberCard } from "./MemberCard";

interface MemberListProps {
  members: User[];
}

export const MemberList: React.FC<MemberListProps> = (props) => {
  const { members = [] } = props;

  return (
    <div className="MemberList">
      {members.map((user, index) => (
        <MemberCard key={`Member_Card_Item_${index}`} user={user} />
      ))}
    </div>
  );
};
