# Musixer

Musixer is a web application that allows users to explore top artists and albums from different countries. Users can create an account with password protection and log in to browse the top 10 artists in their default country, which is set to Taiwan. By clicking on an artist, users can view the top 10 albums by that artist and add them to their favorites.

## Technologies Used

- TypeScript
- Express (backend API)
- PostgreSQL (database)
- Redis (caching)
- React (frontend)
- Chakra UI (UI framework)
- MusixMatch API (integration for artist and album data)

## Prerequisites

- Node.js
- Docker | Podman (for database and caching services)
- MusixMatch API credentials

## Getting Started

1. Clone the repository:

```
git clone https://github.com/cyan92128505/musixer.git
cd musixer
```

2. Install dependencies for the backend:

```
cd api
npm install
```

3. Configure environment variables:

Create a .env file in the api directory.
Add the necessary environment variables, including database connection details, API keys, and JWT secret.
    
4. Generate JWT key:(optional)
```
cd ./api
ts-node ./src/tool/generateKey.ts
base64 
```

5. Start the backend server:
```
npm run dev
```

6. Install dependencies for the frontend:
```
cd ../app
npm install
```

7. Configure environment variables:
Create a .env file in the app directory.
Add the necessary environment variables, such as the API endpoint.

8. Start the frontend development server:
```
npm start
```

9. Access the application:
Open your browser and visit http://localhost:3000 to access the Musixer application.