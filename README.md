## GITHUB USER SEARCH

This project consumes GitHub REST API and uses Redux and Redux toolkits for its global state management.
 
The user of the project inputs any GitHub username of his/her choice, on the click of the search button, the user input is displayed with the user's avatar and on clicking on the user card, you will be directed to the user details page, where the user’s location, Followers and repositories, etc. are displayed. 

This could help my app users easily locate a user and have a quick overview of the searched user which GitHub does not offer at a glance.

---

## Features

- Search for GitHub users by username  
- View user profile details (bio, location, followers, etc.)  
- View a list of public repositories  
- Links to user blogs and GitHub profiles  
- Responsive UI and loading animations (e.g., using Lottie)

---

## Tech Stack

- **Frontend**: React, Redux, React Router, Styled Components  
- **API**: GitHub REST API  
- **Animation**: Lottie  
- **Testing**: Jest, React Testing Library

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/github-search-user.git
cd github-search-user

# Install dependencies
npm install

# Start the development server
npm start
```

---

## ⚙️ Project Structure

```
src/
│
├── component/
│   ├── Home/
│   ├── Header/
│   ├── UserCard/
│   ├── UserDetail/
│   ├── UserListing/
│   ├── PageNotFound/
│   └── Footer/
│
├── features/
│   ├── users/
│       └── userSlice.js
│   └── store.js
│
├── common/
│   └── apis/
│       └── githubApi.js
│
├── App.js
├── index.js
└── store.js
```

---

## 🧪 Running Tests

```bash
npm test
```

---

Here is the [live link](https://jenny-github-user-search.netlify.app/) to the project.

## 🙌 Acknowledgements

- GitHub API  
- Lottie Files  
- React Testing Library

---

