//User profiles needed for the function
// Export all necessary users details
export const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    isActive: true,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    isActive: false,
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob@example.com',
    isActive: true,
  },
  {
    id: 4,
    firstName: 'Sara',
    lastName: 'Williams',
    email: 'sara@example.com',
    isActive: true,
  },
];

export const sampleUser = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  isActive: true,
  role: 'Admin',
};

// index 1: Data Transformation
export function processUserData(users) {
  return users
    .filter((user) => user.isActive)
    .map((user) => ({
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
    }))
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
}

// index 2: Async Data Fetching
export async function fetchUserPosts(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    return posts.map((post) => post.title);
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

// index 3: Creating a User Component (Simulated)
export function createUserProfileHTML(user) {
  const activeBadge = user.isActive
    ? '<span class="badge active">Active</span>'
    : '';

  return `
    <div class="user-card" id="user-${user.id}">
      <img src="${user.avatar}" alt="${user.firstName} ${user.lastName}" class="avatar" />
      <div class="user-info">
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>Email: ${user.email}</p>
        <p>Role: ${user.role}</p>
        ${activeBadge}
      </div>
    </div>
  `;
}

// index 4: State Management Helper
export function createStateManager(initialState) {
  let state = { ...initialState };
  const subscribers = [];

  return {
    // The getState() method
    getState: () => ({ ...state }),

    // The setState() method
    setState: (newState) => {
      state = { ...state, ...newState };
      subscribers.forEach((callback) => callback(state));
    },

    // The the subcribe callback function(method)
    subscribe: (callback) => {
      subscribers.push(callback);
      // Return unsubscribe function
      return () => {
        const index = subscribers.indexOf(callback);
        if (index !== -1) {
          subscribers.splice(index, 1);
        }
      };
    },
  };
}

console.log('Processed Users:', processUserData(users));

fetchUserPosts(1)
  .then((titles) => console.log('User Posts:', titles))
  .catch((error) => console.error('Error fetching posts:', error));


console.log('User Profile HTML:', createUserProfileHTML(sampleUser));

const userState = createStateManager({ name: 'John', online: false });
userState.subscribe((state) => console.log('State changed:', state));
console.log('Initial State:', userState.getState());
userState.setState({ online: true });
userState.setState({ lastActive: '2023-05-01' });
