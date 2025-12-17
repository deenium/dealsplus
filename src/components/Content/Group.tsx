import Text from "../../common/Text/Text";
import "./Content.css";

export const Group = () => {
  return (
    <div className="Group">
      <Text variant="lg" color="gray-dark" className="GroupHeader">
        Name your permissions group
      </Text>
      <div className="GroupInputWrapper">
        <label htmlFor="group-input">
          <Text variant="md" color="gray-dark">
            Permissions group name
          </Text>
          <span className="RequiredAsterisk"> *</span>
        </label>
        <input
          id="group-input"
          type="required"
          className="TextInputField"
          placeholder="Group name"
          // autoFocus={true}
        />
        <Text color="gray">
          A descriptive name will help identify it in the future
        </Text>
      </div>
    </div>
  );
};
