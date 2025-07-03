Overview
This is a Vue 3 movie listing application that fulfills the requirements for a frontend developer assessment. The app allows users to browse movies, search by title, paginate results, and mark favorites which are persisted in browser storage.

Features
✅ Fetches movies from the mock API
✅ Displays movie title, year, and IMDB ID
✅ Pagination support (10 items per page)
✅ Search functionality by movie title
✅ Favorite system with persistent storage (localStorage)
✅ Separate "Favorites" section

Technical Implementation
Framework: Vue 3 with Composition API

Language: TypeScript

Styling: Sass (SCSS syntax)

State Management: Pinia (for shared state)

Persistence: localStorage for favorites

Testing: Vitest for unit tests

Project Setup
Installation
bash
npm install
Development Server
bash
npm run dev
Compile and Minify for Production
bash
npm run build
Run Unit Tests
bash
npm run test:unit
Run E2E Tests
bash
npm run test:e2e
Lint with ESLint
bash
npm run lint
Project Structure
text
src/
├── assets/          # Static assets
├── components/      # Vue components
├── composables/     # Composition API functions
├── stores/          # Pinia stores
├── styles/          # Global SCSS styles
├── types/           # TypeScript interfaces
├── utils/           # Utility functions
├── App.vue          # Main app component
└── main.ts          # App entry point
Testing Strategy
The application includes:

Unit Tests for:

Core components (MovieList, Pagination, Search)

Composables (useMovies, useFavorites)

Utility functions

E2E Tests for:

Main user flows (search, pagination, favoriting)

Deployment
The app can be deployed to various platforms:

Firebase Hosting
Install Firebase CLI: npm install -g firebase-tools

Login: firebase login

Initialize project: firebase init

Deploy: firebase deploy

Heroku
Create a static.json file for configuration

Push to Heroku Git remote

API Usage
The app uses the mock API endpoint:

text
https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}
Future Improvements
Add movie details view

Implement sorting/filtering options

Add user authentication for syncing favorites

Improve responsive design

Add loading skeletons

Implement more comprehensive error handling
