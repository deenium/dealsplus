import type { PermissionsGroupData } from "../components/Modal";
import "./Table.css";

export const Table: React.FC<{ pg: PermissionsGroupData[] }> = (props) => {
  const { pg } = props;
  return (
    <>
      {pg.length > 0 && (
        <div className="SavedData">
          <h2>Saved Permissions Groups</h2>
          <table className="permissions-table">
            <thead>
              <tr>
                <th>Group Name</th>
                <th>Structure Access</th>
                <th>Entity Access</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {pg.map((group, index) => (
                <tr key={index}>
                  <td className="group-name">{group.name}</td>
                  <td>
                    <pre>{JSON.stringify(group.structureAccess, null, 2)}</pre>
                  </td>
                  <td>
                    <pre>{JSON.stringify(group.entityAccess, null, 2)}</pre>
                  </td>
                  <td>
                    <div className="member-tags">
                      {group.members.map((member, i) => (
                        <span key={i} className="member-tag">
                          {member}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
