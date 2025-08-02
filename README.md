# Movie Listings Project

[Live Demo](https://OllieDub2184.github.io/Front-End-Project-Movie-Listings)

A modern React application for browsing and managing your favorite movies, powered by TMDB API. This project allows users to search for movies, view detailed information, and maintain a personalized list of favorite movies.

## Features

- 🔍 **Search Movies**: Search through a vast database of movies using TMDB API
- ⭐ **Favorites Management**: Add/remove movies to your favorites list
- 📱 **Responsive Design**: Seamless experience across desktop and mobile devices
- 📄 **Pagination**: Easy navigation through movie search results
- 💾 **Local Storage**: Persistent storage of favorite movies

## Technologies Used

- **Frontend Framework**: React with Vite
- **Styling**: CSS Modules
- **State Management**: React Hooks
- **API Integration**: TMDB API
- **Local Storage**: Browser's localStorage API
- **Routing**: React Router

## Project Structure

```
src/
├── components/            # Reusable UI components
│   ├── MovieCard         # Individual movie display
│   ├── MovieGrid         # Grid layout for movies
│   ├── Navigation        # Navigation bar
│   ├── Pagination        # Results pagination
│   ├── SearchBar         # Search functionality
│   └── styles/           # Component styles
├── pages/                # Main application pages
│   ├── Home             # Search and browse movies
│   └── Favourites       # Saved favorites
├── services/             # API and data services
├── utils/               # Utility functions
└── assets/              # Static resources
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- TMDB API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/OllieDub2184/Front-End-Project-Movie-Listings
cd movie-listings-project
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory with your TMDB API credentials:
```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_AUTH_KEY=your_auth_key_here
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production



## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/favourites`)
3. Commit your changes (`git commit -m 'Add favourites feature button'`)
4. Push to the branch (`git push origin feature/favourites`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for providing movie data
- [Vite](https://vitejs.dev/) for the blazing fast development experience
- [React](https://reactjs.org/) for the UI framework

## Reports

- [Lighthouse Report](Docs/Lighthouse%20Report.pdf)
- [Accessibility Report](Docs/Accessibility%20Report.md)
