
# Flipkart Clone Project

## Introduction

This project is a clone of the popular e-commerce platform Flipkart. It is built using Vite as the build tool, React for the user interface, Redux for state management, Supabase for the backend, and TypeScript for static typing.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Vite](https://vitejs.dev/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/HARISHKUMAR023/flipkart-clone
   ```

2. Navigate to the project directory:

   ```bash
   cd flipkart-clone
   ```

3. Install dependencies:

   ```bash
   npm install   # or yarn install
   ```

4. Create a Supabase project and configure the environment:

   - Visit [Supabase](https://supabase.io/) and create a new project.
   - Set up your database and obtain the API URL and public key.
   - Create a `.env` file in the project root and add:

     ```env
     REACT_APP_SUPABASE_URL=your_supabase_url
     REACT_APP_SUPABASE_KEY=your_supabase_public_key
     ```

5. Start the development server:

   ```bash
   npm run dev   # or yarn dev
   ```

   This will start the development server, and you can view the app at `http://localhost:3000`.

## Project Structure

- `src/` contains the source code for the React components and other application logic.
- `src/redux/` contains Redux slices and actions for state management.
- `src/api/` contains functions for interacting with the Supabase backend.
- `src/components/` contains reusable UI components.
- `src/pages/` contains the main pages of the application.
- `src/styles/` contains global styles and theme configuration.

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Supabase](https://supabase.io/)
- [TypeScript](https://www.typescriptlang.org/)

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
