import { useEffect, useState } from "react";
import { MemberCard } from "./MemberCard";
import { fetchUsers, type User } from "../../../api/mockapi";

export const MemberList: React.FC = () => {
  const [members, setMembers] = useState<User[]>([]);
  useEffect(() => {
    fetchUsers().then((users) => {
      setMembers(users);
    });
  }, []);

  return (
    <div className="MemberList">
      {members.map((user, index) => (
        <MemberCard key={`Member_Card_Item_${index}`} user={user} />
      ))}
    </div>
  );
};
