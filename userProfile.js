// userProfile.js

// Part 1: Data Transformation
function processUserData(users) {
    // Your code here
  }
  
  // Part 2: Async Data Fetching
  async function fetchUserPosts(userId) {
    // Your code here
  }
  
  // Part 3: Creating a User Component (Simulated)
  function createUserProfileHTML(user) {
    // Your code here
  }
  
  // Part 4: State Management Helper
  function createStateManager(initialState) {
    // Your code here
  }
  
  // Test your functions
  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      isActive: true,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      isActive: false,
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      isActive: true,
    },
    {
      id: 4,
      firstName: "Sara",
      lastName: "Williams",
      email: "sara@example.com",
      isActive: true,
    },
  ];
  
  console.log("Processed Users:", processUserData(users));
  
  fetchUserPosts(1)
    .then((titles) => console.log("User Posts:", titles))
    .catch((error) => console.error("Error fetching posts:", error));
  
  const sampleUser = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    isActive: true,
    role: "Admin",
  };
  
  console.log("User Profile HTML:", createUserProfileHTML(sampleUser));
  
  const userState = createStateManager({ name: "John", online: false });
  userState.subscribe((state) => console.log("State changed:", state));
  console.log("Initial State:", userState.getState());
  userState.setState({ online: true });
  userState.setState({ lastActive: "2023-05-01" });