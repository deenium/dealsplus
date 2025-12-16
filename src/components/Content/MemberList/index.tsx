import { useState } from "react";
import { MemberCard } from "./MemberCard";

export const MemberList: React.FC = () => {
  const [members, setMembers] = useState([1, 2, 3, 4]);
  const user = {
    user: "Ben Stockton",
    email: "ben@dealsplus.io",
    organization: "Dealsplus",
  };
  return (
    <div className="MemberList">
      {members.map(() => (
        <MemberCard user={user} />
      ))}
    </div>
  );
};
