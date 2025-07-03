# Movie Listing App

## Overview
A Vue 3 movie listing application that allows users to browse movies, search by title, paginate results, and mark favorites which are persisted in browser storage. This project fulfills all requirements from the frontend developer assessment.

## Features
- Fetches movies from the mock API
- Displays movie title, year, and IMDB ID for each item
- Pagination support (10 items per page)
- Search functionality by movie title
- Favorite system with persistent storage (using localStorage)
- Separate "Favorites" section that persists between sessions

## Technical Implementation
- **Framework**: Vue 3 with Composition API
- **Language**: TypeScript
- **Styling**: Sass (SCSS syntax)
- **State Management**: Pinia
- **Persistence**: localStorage for favorites
- **Testing**: Vitest for unit tests, Cypress for E2E tests

## Project Setup

### Installation
```
npm install
```
Development Server
```
npm run dev
```
Compile and Minify for Production
```
npm run build
```
Run Unit Tests
```
npm run test:unit
```
Run E2E Tests
```
npm run test:e2e
```
Lint with ESLint
```
npm run lint
```
Project Structure
text
src/
├── assets/          # Static assets
├── components/      # Vue components
│   ├── MovieCard.vue
│   ├── MovieList.vue
│   ├── Pagination.vue
│   ├── SearchBar.vue
│   └── FavoritesList.vue
├── composables/     # Composition API functions
│   ├── useMovies.ts
│   └── useFavorites.ts
├── stores/          # Pinia stores
│   └── movieStore.ts
├── styles/          # Global SCSS styles
├── types/           # TypeScript interfaces
├── utils/           # Utility functions
├── App.vue          # Main app component
└── main.ts          # App entry point
Testing Strategy
The application includes:

Unit Tests (Vitest) for:

Core components (MovieList, Pagination, Search)

Composables (useMovies, useFavorites)

Utility functions

Pinia store actions

E2E Tests (Cypress) for:

Main user flows (search, pagination, favoriting)

Persistence of favorites

Responsive behavior

Deployment Options
Firebase Hosting
Install Firebase CLI:

```
npm install -g firebase-tools
```
Login to Firebase:

```
firebase login
```
Initialize project:

```
firebase init
```
Select Hosting and configure as needed

Deploy:

```
firebase deploy
```
Heroku
Create a static.json file in root with:
```
json
{
  "root": "dist",
  "clean_urls": true,
  "routes": {
    "/**": "index.html"
  }
}
```
Deploy:

```
heroku login
heroku create
git push heroku main
```

API Usage
The app uses the mock API endpoint:

```
https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}
```
Example response structure:

```
{
  "page": 1,
  "per_page": 10,
  "total": 100,
  "total_pages": 10,
  "data": [
    {
      "Title": "Movie Title",
      "Year": 2000,
      "imdbID": "tt1234567"
    }
  ]
}
```
