// Mock API module - simulates backend API calls with mock data and network delays

// User data structure
export interface User {
  user: string;
  email: string;
  organization: string;
}

// Entities grouped by country for a structure
export interface EntityGroup {
  [country: string]: string[];
}

// Simulates network latency in ms
const DELAY_MS = 200;

// Mock data for structures, roles, entities, and users
const STRUCTURES = ["Phoneix", "Jupiter", "Saturn", "Pyramid", "Nile"];
const STRUCTURE_ROLES = ["No access", "Basic access", "Full access"];
const ENTITY_ROLES = ["No access", "Full access"];

// Mock entities mapped by structure name
const ENTITIES_BY_STRUCTURE: Record<string, EntityGroup> = {
  default: {
    England: ["Topco", "Midco"],
    Luxembourg: ["Holdco", "Google", "Meta"],
  },
};

// Mock users for group membership
const USERS: User[] = [
  {
    user: "Ben Stockton",
    email: "ben@dealsplus.io",
    organization: "Dealsplus",
  },
  { user: "Sai Padala", email: "sai@dealsplus.io", organization: "Dealsplus" },
  { user: "Matt Wallis", email: "matt@dealsplus.io", organization: "Phoneix" },
];

// Helper function to simulate network latency
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// --- API FUNCTIONS ---

/** Fetch available structures for Step 2 */
export const fetchStructures = async (): Promise<string[]> => {
  await delay(DELAY_MS);
  return STRUCTURES;
};

/** Fetch available roles for structures */
export const fetchStructureRoles = async (): Promise<string[]> => {
  await delay(DELAY_MS);
  return STRUCTURE_ROLES;
};

/** Fetch entities grouped by country for a structure */
export const fetchStructureEntities = async (
  structureName: string
): Promise<EntityGroup> => {
  await delay(DELAY_MS);
  // Return specific data if it exists, otherwise return default mock data
  return (
    ENTITIES_BY_STRUCTURE[structureName] || ENTITIES_BY_STRUCTURE["default"]
  );
};

/** Fetch available roles for entities */
export const fetchEntityRoles = async (): Promise<string[]> => {
  await delay(DELAY_MS);
  return ENTITY_ROLES;
};

/** Fetch users available for group membership in Step 4 */
export const fetchUsers = async (): Promise<User[]> => {
  await delay(DELAY_MS);
  return USERS;
};

/** Mock function to save final permissions group configuration */
export const createPermissionGroup = async (
  payload: any
): Promise<{ success: boolean; message: string }> => {
  await delay(DELAY_MS * 2); // Simulating a longer "write" operation

  // Randomly simulate success or failure if you want to test error handling
  // const isSuccess = Math.random() > 0.1;

  return { success: true, message: "Permission group created successfully" };
};
