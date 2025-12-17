import Text from "../../common/Text/Text";
import type { PermissionsGroupData } from "../Modal";
import "./Content.css";

// Step 1: Group name input component
interface GroupProps {
  formData: PermissionsGroupData;
  updateFormData: (updates: Partial<PermissionsGroupData>) => void;
}

export const Group: React.FC<GroupProps> = (props) => {
  const { formData, updateFormData } = props;

  // Updates group name in form data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateFormData({ name: e.target.value });
  };

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
          type="text"
          className="TextInputField"
          placeholder="Group name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Text color="gray">
          A descriptive name will help identify it in the future
        </Text>
      </div>
    </div>
  );
};
