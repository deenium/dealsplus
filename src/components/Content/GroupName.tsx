import Text from "../../common/Text/Text";
import "./Content.css";

export const GroupName = () => {
  return (
    <div className="GroupName">
      <Text variant="lg" color="gray-dark" className="GroupNameHeader">
        Name your permissions group
      </Text>
      <div className="GroupNameInputContainer">
        <label htmlFor="group-name-input">
          <Text variant="md" color="gray-dark">
            Permissions group name
          </Text>
          <span className="RequiredAsterisk"> *</span>
        </label>
        <input
          id="group-name-input"
          type="required"
          className="GroupNameInputField"
          placeholder="Group name"
        />
        <Text className="GroupNameDescription">
          A descriptive name will help identify it in the future
        </Text>
      </div>
    </div>
  );
};
