# React Frontend for Employee Management

This project is a React-based frontend application for managing employees, featuring login, signup, and full CRUD (Create, Read, Update, Delete) functionality. It integrates with a Node.js backend and MongoDB database.

## Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).  
- Auto-reloads on code changes.  
- Displays lint errors in the console.

### `npm run build`

Builds the app for production into the `build/` folder.  
- Optimized for performance.  
- Minified and ready for deployment.

## Features

- **Authentication**: Login and signup functionality.
- **CRUD Operations**: Add, view, update, and delete employees.
- **API Integration**: Communicates with backend at `http://localhost:3000/api/v1`.

## API Endpoints

- **Login**: `POST /api/v1/users/login`
- **Signup**: `POST /api/v1/users/signup`
- **Get All Employees**: `GET /api/v1/emp/employees`
- **Get Employee by ID**: `GET /api/v1/emp/employees/:id`
- **Add Employee**: `POST /api/v1/emp/employees`
- **Update Employee**: `PUT /api/v1/emp/employees/:id`
- **Delete Employee**: `DELETE /api/v1/emp/employees/:id`

## Deployment

1. Run `npm run build` to generate the production build.  
2. Deploy the contents of the `build/` folder using Docker

## Troubleshooting

- **API Errors**: Ensure the backend is running at `http://localhost:3000`.  
- **CORS Issues**: Configure the backend to allow requests from `http://localhost:3000`.

## Clone Repo

- **git clone https://github.com/DonelMukiza/101394045_comp3123_assignment2_reactjs.git

## Navigate to the project directory:

-**cd 101394045_comp3123_assignment2_reactjs

