// import React, { useState, useEffect } from 'react';

// const Users = () => {
//   // Load initial users from localStorage, or use default users if not found
//   const initialUsers = JSON.parse(localStorage.getItem('users')) || [
//     {
//       name: 'Leslie Alexander',
//       role: 'Co-Founder / CEO',
//       email: 'leslie.alexander@example.com',
//       lastSeen: '3h ago',
//       online: false,
//     },
//     {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       email: 'michael.foster@example.com',
//       lastSeen: '3h ago',
//       online: false,
//     },
//     {
//       name: 'Dries Vincent',
//       role: 'Business Relations',
//       email: 'dries.vincent@example.com',
//       lastSeen: null,
//       online: true,
//     },
//     {
//       name: 'Lindsay Walton',
//       role: 'Front-end Developer',
//       email: 'lindsay.walton@example.com',
//       lastSeen: '3h ago',
//       online: false,
//     },
//     {
//       name: 'Courtney Henry',
//       role: 'Designer',
//       email: 'courtney.henry@example.com',
//       lastSeen: '3h ago',
//       online: false,
//     },
//     {
//       name: 'Tom Cook',
//       role: 'Director of Product',
//       email: 'tom.cook@example.com',
//       lastSeen: null,
//       online: true,
//     },
//   ];

//   const [users, setUsers] = useState(initialUsers);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [newUser, setNewUser] = useState({ name: '', role: '', email: '' });
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showRemoveModal, setShowRemoveModal] = useState(false);
//   const [selectedUserToRemove, setSelectedUserToRemove] = useState(null);

//   // Effect to update localStorage whenever users change
//   useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]);

//   // Filtered users based on the search query
//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle input changes for the Add User form
//   const handleInputChange = (e) => {
//     setNewUser({ ...newUser, [e.target.name]: e.target.value });
//   };

//   // Add new user to the users list
//   const handleAddUser = () => {
//     if (newUser.name && newUser.role && newUser.email) {
//       setUsers([...users, { ...newUser, lastSeen: 'Just now', online: false }]);
//       setNewUser({ name: '', role: '', email: '' }); // Reset the form
//       setShowAddModal(false); // Close the modal
//     }
//   };

//   // Open the Remove User modal
//   const handleRemoveUser = () => {
//     if (selectedUserToRemove !== null) {
//       const updatedUsers = users.filter((_, index) => index !== parseInt(selectedUserToRemove));
//       setUsers(updatedUsers);
//       setShowRemoveModal(false); // Close the modal
//     }
//   };

//   return (
//     <div>
//       <header className="border-b border-gray-200 bg-gray-50">
//         <div className="max-w-screen-xl px-2 py-2 sm:px-4 sm:py-4 lg:px-6">
//           <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-600 sm:text-3xl">Users</h1>
//             </div>

//             <div className="flex items-center gap-2">
//               <button
//                 className="inline-block rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
//                 type="button"
//                 onClick={() => setShowAddModal(true)}
//               >
//                 Add Users
//               </button>

//               <button
//                 className="inline-block rounded bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring"
//                 type="button"
//                 onClick={() => setShowRemoveModal(true)}
//               >
//                 Remove Users
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="mx-auto my-0.5 p-6 bg-white shadow-lg">
//         <div className="flex justify-between items-center mb-6 pt-6">
//           <div className="flex items-center w-full space-x-4">
//             {/* Search input with half-width */}
//             <div className="relative w-1/2">
//               <input
//                 type="search"
//                 className="w-full relative block rounded border border-solid border-neutral-300 bg-transparent px-3 py-2 text-base leading-[1.6] text-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               {/* Search icon */}
//               <span className="absolute top-2.5 right-3 text-neutral-700 dark:text-neutral-200">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="h-5 w-5"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//             </div>

//             {/* Filter button */}
//             <button disabled className="px-4 py-2 bg-indigo-600 text-white rounded">
//               Filter
//             </button>
//           </div>
//         </div>

//         {/* User list */}
//         <ul className="divide-y divide-gray-200">
//           {filteredUsers.map((person, index) => (
//             <li key={index} className="py-4 flex items-center space-x-3">
//               <img
//                 className="h-10 w-10 rounded-full"
//                 src={`https://via.placeholder.com/40x40.png?text=${person.name.charAt(0)}`}
//                 alt={person.name}
//               />
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-medium text-gray-900">{person.name}</p>
//                 <p className="text-sm text-gray-500">{person.email}</p>
//               </div>
//               <div className="flex-shrink-0 text-right">
//                 <p className="text-sm text-gray-500">{person.role}</p>
//                 <p className="text-sm text-gray-400">
//                   {person.online ? (
//                     <span className="text-green-500">Online</span>
//                   ) : (
//                     `Last seen ${person.lastSeen}`
//                   )}
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="text-center py-6 bg-gray-100 rounded-lg mt-3">
//              <h3 className="text-lg font-medium text-gray-800">Keep your team on board!</h3>
//           </div>
//       </div>

//       {/* Add User Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg">
//             <h2 className="text-lg font-medium">Add New User</h2>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={newUser.name}
//               onChange={handleInputChange}
//               className="border px-3 py-2 rounded w-full my-2"
//             />
//             <input
//               type="text"
//               name="role"
//               placeholder="Role"
//               value={newUser.role}
//               onChange={handleInputChange}
//               className="border px-3 py-2 rounded w-full my-2"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={newUser.email}
//               onChange={handleInputChange}
//               className="border px-3 py-2 rounded w-full my-2"
//             />
//             <div className="flex justify-end gap-2 mt-4">
//               <button
//                 className="px-4 py-2 bg-gray-400 text-white rounded"
//                 onClick={() => setShowAddModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-indigo-600 text-white rounded"
//                 onClick={handleAddUser}
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Remove User Modal */}
//       {showRemoveModal && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
//           <div className="bg-white p-6 rounded shadow-lg">
//             <h2 className="text-lg font-medium">Remove User</h2>
//             <select
//               className="border px-3 py-2 rounded w-full my-2"
//               value={selectedUserToRemove}
//               onChange={(e) => setSelectedUserToRemove(e.target.value)}
//             >
//               <option value="" disabled>Select a user</option>
//               {users.map((user, index) => (
//                 <option key={index} value={index}>
//                   {user.name}
//                 </option>
//               ))}
//             </select>
//             <div className="flex justify-end gap-2 mt-4">
//               <button
//                 className="px-4 py-2 bg-gray-400 text-white rounded"
//                 onClick={() => setShowRemoveModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-red-600 text-white rounded"
//                 onClick={handleRemoveUser}
//               >
//                 Remove
//               </button>
//             </div>

//           </div>
          
//         </div>
//       )}
//     </div>
//   );
// };

// export default Users;
// ============================================
import React, { useState, useEffect } from 'react';

const Users = () => {
  const initialUsers = JSON.parse(localStorage.getItem('users')) || [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      email: 'leslie.alexander@example.com',
      lastSeen: '3h ago',
      online: false,
    },
    {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      email: 'michael.foster@example.com',
      lastSeen: '3h ago',
      online: false,
    },
    {
      name: 'Dries Vincent',
      role: 'Business Relations',
      email: 'dries.vincent@example.com',
      lastSeen: null,
      online: true,
    },
    {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      lastSeen: '3h ago',
      online: false,
    },
    {
      name: 'Courtney Henry',
      role: 'Designer',
      email: 'courtney.henry@example.com',
      lastSeen: '3h ago',
      online: false,
    },
    {
      name: 'Tom Cook',
      role: 'Director of Product',
      email: 'tom.cook@example.com',
      lastSeen: null,
      online: true,
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [newUser, setNewUser] = useState({ name: '', role: '', email: '' });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [selectedUserToRemove, setSelectedUserToRemove] = useState(null);
  const [filterCriteria, setFilterCriteria] = useState({ role: '', lastSeen: '' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!filterCriteria.role || user.role === filterCriteria.role) &&
    (!filterCriteria.lastSeen || (filterCriteria.lastSeen === 'Online' && user.online) ||
      (filterCriteria.lastSeen === 'Last seen' && !user.online))
  );

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.role && newUser.email) {
      setUsers([...users, { ...newUser, lastSeen: 'Just now', online: false }]);
      setNewUser({ name: '', role: '', email: '' });
      setShowAddModal(false);
    }
  };

  const handleRemoveUser = () => {
    if (selectedUserToRemove !== null) {
      const updatedUsers = users.filter((_, index) => index !== parseInt(selectedUserToRemove));
      setUsers(updatedUsers);
      setShowRemoveModal(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilterCriteria({ ...filterCriteria, [e.target.name]: e.target.value });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <header className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-screen-xl px-2 py-2 sm:px-4 sm:py-4 lg:px-6">
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-600 sm:text-3xl">Users</h1>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="inline-block rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => setShowAddModal(true)}
              >
                Add Users
              </button>

              <button
                className="inline-block rounded bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => setShowRemoveModal(true)}
              >
                Remove Users
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto my-0.5 p-6 bg-white shadow-lg">
        <div className="flex justify-between items-center mb-6 pt-6">
          <div className="flex items-center w-full space-x-4">
            <div className="relative w-1/2">
              <input
                type="search"
                className="w-full relative block rounded border border-solid border-neutral-300 bg-transparent px-3 py-2 text-base leading-[1.6] text-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute top-2.5 right-3 text-neutral-700 dark:text-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            {/* Filter button with dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Filter
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg">
                  <div className="px-4 py-2">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <select
                      name="role"
                      value={filterCriteria.role}
                      onChange={handleFilterChange}
                      className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                    >
                      <option value="">All Roles</option>
                      <option value="Co-Founder / CEO">Co-Founder / CEO</option>
                      <option value="Co-Founder / CTO">Co-Founder / CTO</option>
                      <option value="Business Relations">Business Relations</option>
                      <option value="Front-end Developer">Front-end Developer</option>
                      <option value="Designer">Designer</option>
                      <option value="Director of Product">Director of Product</option>
                    </select>
                  </div>
                  <div className="px-4 py-2">
                    <label htmlFor="lastSeen" className="block text-sm font-medium text-gray-700">
                      Last Seen
                    </label>
                    <select
                      name="lastSeen"
                      value={filterCriteria.lastSeen}
                      onChange={handleFilterChange}
                      className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
                    >
                      <option value="">All Statuses</option>
                      <option value="Online">Online</option>
                      <option value="Last seen">Last Seen</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <ul className="divide-y divide-gray-200">
          {filteredUsers.map((person, index) => (
            <li key={index} className="py-4 flex items-center space-x-3">
              <img
                className="h-10 w-10 rounded-full"
                src={`https://via.placeholder.com/40x40.png?text=${person.name.charAt(0)}`}
                alt={person.name}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
                <p className="text-sm text-gray-500">{person.email}</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <p className="text-sm text-gray-500">{person.role}</p>
                <p className={`text-sm ${person.online ? 'text-green-500' : 'text-gray-400'}`}>
                    {person.online ? 'Online' : person.lastSeen || 'Offline'}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center py-6 bg-gray-100 rounded-lg mt-3">
             <h3 className="text-lg font-medium text-gray-800">Keep your team on board!</h3>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add a new user</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Full name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
                placeholder="Role"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <button
                type="button"
                className="w-full p-2 bg-indigo-600 text-white rounded"
                onClick={handleAddUser}
              >
                Add User
              </button>
            </form>
            <button
              type="button"
              className="mt-4 text-gray-500 underline"
              onClick={() => setShowAddModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showRemoveModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Remove a user</h2>
            <select
              name="removeUser"
              value={selectedUserToRemove}
              onChange={(e) => setSelectedUserToRemove(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value={null}>Select a user</option>
              {users.map((user, index) => (
                <option key={index} value={index}>
                  {user.name} ({user.email})
                </option>
              ))}
            </select>
            <button
              type="button"
              className="w-full p-2 bg-red-600 text-white rounded mt-4"
              onClick={handleRemoveUser}
            >
              Remove User
            </button>
            <button
              type="button"
              className="mt-4 text-gray-500 underline"
              onClick={() => setShowRemoveModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;