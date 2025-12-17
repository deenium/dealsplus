// Types based on the provided schema
export interface User {
  user: string;
  email: string;
  organization: string;
}

export interface EntityGroup {
  [country: string]: string[];
}

// Simulating network delay (e.g., 400ms)
const DELAY_MS = 400;

// --- DATA CONSTANTS ---

const STRUCTURES = ["Phoneix", "Jupiter", "Saturn", "Pyramid", "Nile"];

const STRUCTURE_ROLES = ["Full access", "No access", "Basic access"];

const ENTITY_ROLES = ["Full access", "No access"];

const ENTITIES_BY_STRUCTURE: Record<string, EntityGroup> = {
  // Mock data specifically for "Phoneix" as per example,
  // falling back to generic data for others for the demo
  default: {
    England: ["Topco", "Midco"],
    Luxembourg: ["Holdco", "Google", "Meta"],
  },
};

const USERS: User[] = [
  {
    user: "Ben Stockton",
    email: "ben@dealsplus.io",
    organization: "Dealsplus",
  },
  { user: "Sai Padala", email: "sai@dealsplus.io", organization: "Dealsplus" },
  { user: "Matt Wallis", email: "matt@dealsplus.io", organization: "Phoneix" },
];

// --- HELPER ---
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// --- API FUNCTIONS ---

/**
 * Step 2: GET /structures
 * Fetch the list of structures
 */
export const fetchStructures = async (): Promise<string[]> => {
  await delay(DELAY_MS);
  return STRUCTURES;
};

/**
 * Step 2: GET /structure/roles
 * Fetch the list of roles for a structure
 */
export const fetchStructureRoles = async (): Promise<string[]> => {
  await delay(DELAY_MS);
  return STRUCTURE_ROLES;
};

/**
 * Step 3: GET /entities/{structureName}
 * Fetch entities grouped by country for a specific structure
 */
export const fetchStructureEntities = async (
  structureName: string
): Promise<EntityGroup> => {
  await delay(DELAY_MS);
  // Return specific data if it exists, otherwise return default mock data
  return (
    ENTITIES_BY_STRUCTURE[structureName] || ENTITIES_BY_STRUCTURE["default"]
  );
};

/**
 * Step 3: GET /entity/roles
 * Fetch the list of roles for an entity
 */
export const fetchEntityRoles = async (): Promise<string[]> => {
  await delay(DELAY_MS);
  return ENTITY_ROLES;
};

/**
 * Step 4: GET /users
 * Fetch the list of users to assign
 */
export const fetchUsers = async (): Promise<User[]> => {
  await delay(DELAY_MS);
  return USERS;
};

/**
 * Step 1/Final: POST /permission-group
 * Mock function to simulate saving the final workflow configuration
 */
export const createPermissionGroup = async (
  payload: any
): Promise<{ success: boolean; message: string }> => {
  await delay(DELAY_MS * 2); // Simulating a longer "write" operation
  console.log("Submitting Payload:", payload); // For debugging

  // Randomly simulate success or failure if you want to test error handling
  // const isSuccess = Math.random() > 0.1;

  return { success: true, message: "Permission group created successfully" };
};
