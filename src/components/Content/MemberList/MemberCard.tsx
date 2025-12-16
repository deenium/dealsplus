import type { User } from "../../../api/mockapi";
import Text from "../../../common/Text/Text";
import { Toggle } from "./Toggle";
import "./MemberList.css";
import { useState } from "react";

interface MemberCardProps {
  user: User;
}

export const MemberCard: React.FC<MemberCardProps> = (props) => {
  const { user } = props;

  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="MemberCard">
      <div className="MemberInfo">
        <Text color="gray-dark">{user.user}</Text>
        <Text variant="sm" fontWeight="regular">
          {`${user.email}  •  ${user.organization}`}
        </Text>
      </div>
      <Toggle isOn={isToggled} handleToggle={() => setIsToggled(!isToggled)} />
    </div>
  );
};
