# Informatic 📊

A modern, responsive dashboard that fetches and displays users, todos, and other data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) mock REST API.

🌐 **Live Demo:** [informatic-json.netlify.app](https://informatic-json.netlify.app/)

---

## Features

- **Users Dashboard** — Browse a list of users with their details fetched live from JSONPlaceholder.
- **todos Explorer** — View todos along with its relative user & status.
- **Mock Data via JSONPlaceholder** — No backend required; all data is served through the free JSONPlaceholder API, making it ideal for prototyping and learning.
- **Client-side Routing** — Seamless navigation between pages using React Router v7.
- **Server State Management** — Efficient data fetching, caching, and synchronization powered by TanStack Query (React Query v5).
- **Toast Notifications** — User-friendly feedback on actions using React Hot Toast.
- **Fully Typed** — Built with TypeScript for type safety and a better developer experience.
- **Responsive UI** — Styled with Tailwind CSS v4 for a clean, mobile-friendly layout.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Vite](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [TanStack Query v5](https://tanstack.com/query/latest) | Data fetching & caching |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |
| [Lucide React](https://lucide.dev/) | Icon library |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | Mock REST API |

---

## Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or higher
- **npm** v9 or higher (or your preferred package manager)

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/Eslam-Elwey/informatic.git
cd informatic
```

2. **Install dependencies**

```bash
npm install
```

---

## Running the App

### Development

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Production Build

Compile and bundle the app for production:

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

Serve the production build locally to verify it before deploying:

```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

---

## Project Structure

```
informatic/
├── public/             # Static assets
├── src/                # Application source code
│   ├── features/       # divide system to features
│   ├── ui/             # Reusable UI components
│   ├── pages/          # Route-level page components
│   ├── hooks/          # Custom React hooks (data fetching, etc.)
│   ├── types/          # TypeScript type definitions
│   ├── services/       # API calling
│   └── main.tsx        # App entry point
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Data Source

All data is fetched from **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)** — a free, fake REST API for testing and prototyping. No API key or authentication is required.

Endpoints used:

- `GET /users` — Retrieve the list of users
- `GET /todos` — Retrieve the list of todos
- `GET /users/:id` — Retrieve a single user by ID
- `GET /todos/:id` — Retrieve a single todo by ID

---

## License

This project is open source and available under the [MIT License](LICENSE).
