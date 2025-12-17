# Permissions Group Management System

A multi-step workflow application for creating and managing permissions groups with hierarchical access control (structures, entities, and members).

---

## High-Level Design & Functionality Requirements

### Overview

The application provides a 4-step modal workflow for creating permissions groups with granular access control:

1. **Step 1: Group Naming** - User defines the permissions group name
2. **Step 2: Structure Access** - User selects structures and assigns access roles
3. **Step 3: Entity Access** - Skipped this
4. **Step 4: Member Assignment** - User adds group members from a user directory

### Key Features

**Multi-Step Workflow**

- Linear progression through 4 configurable steps
- Validation at Step 1 (requires non-empty group name)
- Back/forward navigation with cancel option
- Visual step indicator with progress tracking

**Hierarchical Access Control**

- Structures represent top-level organizational units
- Checkbox-based selection with dropdown role selectors

**Member Management**

- Add/remove users from permissions groups
- Toggle-based member selection
- User information display (name, email, organization)

**Data Persistence & Display**

- All created permissions groups saved to state
- Results table displays group configurations
- JSON-formatted display of access configurations

---

## Low-Level Design & Code Architecture

### Directory Structure

```
src/
├── main.tsx                    # Application entry point
├── App.tsx                     # Root component with workflow state
├── api/
│   └── mockapi.ts             # Mock API with network simulation
├── common/                     # Reusable UI components
│   ├── Button/
│   │   └── Button.tsx         # Reusable button (outline/filled variants)
│   └── Text/
│       └── Text.tsx           # Reusable text (size/color/weight variants)
├── components/
│   ├── Modal.tsx              # Main modal container & state management
│   ├── Header.tsx             # Modal header with title & close button
│   ├── Footer.tsx             # Modal footer with Back/Next buttons
│   ├── Content/
│   │   ├── index.tsx          # Content router (renders different steps)
│   │   ├── Group.tsx          # Step 1: Group naming input
│   │   ├── Header.tsx         # Step header with instructions
│   │   ├── AccessTree/        # Steps 2-3: Hierarchical selection
│   │   │   ├── index.tsx      # AccessTree container
│   │   │   ├── Header.tsx     # Column headers (Item, Role)
│   │   │   ├── Checkbox.tsx   # Checkbox with active state
│   │   │   └── Body/
│   │   │       ├── index.tsx  # Row container
│   │   │       ├── Row.tsx    # Individual structure/entity row
│   │   │       ├── Popup.tsx  # Role dropdown with positioning
│   │   │       └── PopupItem.tsx # Individual role option
│   │   ├── MemberList/        # Step 4: User selection
│   │   │   ├── index.tsx      # Member list container
│   │   │   ├── MemberCard.tsx # Individual member card
│   │   │   └── Toggle.tsx     # Toggle switch component
│   │   └── SearchBar/         # Filter across all steps
│   │       ├── index.tsx      # Search bar container
│   │       └── SearchInput.tsx # Search input
│   └── ProgramStepper/        # Visual progress indicator
│       ├── index.tsx          # Stepper container
│       ├── StepCard.tsx       # Individual step display
│       └── StepIcon.tsx       # Step number/checkmark icon
├── extras/
│   └── Table.tsx              # Results table display
└── styles/
    └── colors.css             # Color scheme definitions
```

### Component Hierarchy

```
App
├── Button (trigger modal)
├── Modal (main workflow container)
│   ├── Header
│   ├── ProgramStepper
│   │   └── StepCard[] (4 steps)
│   │       └── StepIcon
│   ├── Content (step-based router)
│   │   ├── Step 1: Group
│   │   ├── Step 2-3: AccessTree
│   │   │   ├── Header
│   │   │   └── Body
│   │   │       └── Row[]
│   │   │           ├── Checkbox
│   │   │           └── Popup
│   │   │               └── PopupItem[]
│   │   └── Step 4: MemberList
│   │       └── MemberCard[]
│   │           ├── Text
│   │           └── Toggle
│   ├── SearchBar (Steps 2-4)
│   │   ├── SearchInput
│   │   └── Text (result count)
│   └── Footer
│       ├── Button (Back/Cancel)
│       └── Button (Next/Create)
└── Table (results display)
    └── Displays all saved permission groups
```

### State Management

**App Component** (Top-level state)

- `isOpen`: Boolean - Modal visibility
- `pg`: PermissionsGroupData[] - Array of saved permission groups

**Modal Component** (Workflow state)

- `step`: Number - Current step (1-4)
- `formData`: PermissionsGroupData - Accumulated form data across steps
  - `name`: string - Group name (Step 1)
  - `structureAccess`: Record<string, string> - Structure→Role mapping (Step 2)
  - `entityAccess`: Record<string, boolean> - Entity selection (Step 3)
  - `members`: string[] - Email list (Step 4)

**Content Component** (Data fetching state)

- `structures`: string[] - Available structures/entities
- `members`: User[] - Filtered user list
- `searchTerm`: string - Search filter

### Data Flow

1. **Initialization**

   - App opens Modal, passes `onClose` and `onSave` callbacks
   - Modal initializes empty `formData`

2. **Step Progression**

   - User fills/selects data at current step
   - `updateFormData` callback merges updates into `formData`
   - `onNext` validates current step and advances
   - `onBack` decrements step or closes modal

3. **API Integration**

   - Content component fetches data on mount/step change
   - Mock API (`mockapi.ts`) simulates 200ms network delay
   - Fetch functions: `fetchStructures`, `fetchStructureRoles`, `fetchUsers`, etc.

4. **Finalization**
   - Step 4 completion triggers `onSave(formData)`
   - App receives complete permissions group
   - Modal closes, group added to display table

### Interface Definitions

```typescript
// Permission group data structure
interface PermissionsGroupData {
  name: string; // Group name (required, non-empty)
  structureAccess: Record<string, string>; // { "Structure": "Role" }
  entityAccess: Record<string, boolean>; // { "Entity": true/false }
  members: string[]; // Array of email addresses
}

// User data from API
interface User {
  user: string; // Display name
  email: string; // Email address (used as unique identifier)
  organization: string; // Organization name
}

// Entities grouped by location
interface EntityGroup {
  [country: string]: string[]; // { "England": ["Entity1", "Entity2"] }
}
```

### Key Design Patterns

**1. Lift State Up**

- Form data managed in Modal, passed to Content
- Updates via callback (`updateFormData`)
- Single source of truth for workflow state

**2. Conditional Rendering**

- Content component renders different step views
- SearchBar visible only in Steps 2-4
- Table only displays when groups exist

**3. Memoization**

- Components wrapped with `React.memo` to prevent unnecessary re-renders
- Used in: Header, StepCard, StepIcon, ProgramStepper

**4. Callback Props**

- Child components receive handlers to update parent state
- Enables data flow from deep components to top-level state

**5. Modal Pattern**

- Overlay with centered container
- Close button and cancel functionality
- Persistent across step navigation

### Step-Specific Behavior

| Step | Component  | Primary Action                  | Data Output               | Validation          |
| ---- | ---------- | ------------------------------- | ------------------------- | ------------------- |
| 1    | Group      | Input group name                | `name: string`            | Non-empty required  |
| 2    | AccessTree | Select structures, assign roles | `structureAccess: Record` | Optional (can skip) |
| 3    | AccessTree | Select entities, assign roles   | `entityAccess: Record`    | Optional (can skip) |
| 4    | MemberList | Toggle member selection         | `members: string[]`       | Optional (can skip) |

### Search & Filtering

- Implemented at Content level for Steps 2-4
- Filters structures/entities/members by case-insensitive substring match
- Results counter updates dynamically

### API Layer (`mockapi.ts`)

Mock functions simulate backend endpoints with 200ms network delay:

```typescript
fetchStructures(); // GET /structures
fetchStructureRoles(); // GET /structure/roles
fetchStructureEntities(name); // GET /entities/{structure}
fetchEntityRoles(); // GET /entity/roles
fetchUsers(); // GET /users
createPermissionGroup(payload); // POST /permission-group
```

---

## Tech Stack

- **React 18** - UI framework with hooks
- **TypeScript** - Type safety
- **CSS Modules** - Component-scoped styling
- **React Icons** - Icon library (HiCheck, RxCross2, RiUserAddLine, FaChevronDown, BiSearch)
- **Vite** - Build tool and dev server

---

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Future Enhancements

- Persist permissions groups to backend database
- Implement actual role-based access control
- Add edit/delete functionality for saved groups
- Implement error handling and retry logic
- Add form validation messaging
- Support bulk operations for member/structure selection
- Add audit logging for group creation/modifications
