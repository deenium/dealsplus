import type { User } from "../../../api/mockapi";
import Text from "../../../common/Text/Text";
import { Toggle } from "./Toggle";
import "./MemberList.css";

interface MemberCardProps {
  user: User;
  isToggled: boolean;
  handleToggle: (value: string) => void;
}

export const MemberCard: React.FC<MemberCardProps> = (props) => {
  const { user, isToggled, handleToggle } = props;

  return (
    <div className="MemberCard">
      <div className="MemberInfo">
        <Text color="gray-dark">{user.user}</Text>
        <Text variant="sm" fontWeight="regular">
          {`${user.email}  •  ${user.organization}`}
        </Text>
      </div>
      <Toggle isOn={isToggled} handleToggle={() => handleToggle(user.email)} />
    </div>
  );
};
