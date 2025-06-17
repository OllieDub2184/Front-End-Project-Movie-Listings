const FAVOURITES_KEY="movieAppFavourites"
export const getFavouritesFromStorage = ()=>{try { const favouritesJson =localStorage.getItem(FAVOURITES_KEY)
    return favouritesJson? JSON.parse (favouritesJson): []
    
} catch (error){
    console.error('Error passing favourites from local storage:', error)
    localStorage.removeItem(FAVOURITES_KEY)
}

const saveFavoritesToStorage = (favoritesArray = "movieAppFavorites") => {
    try {
     // Ensure 'favoritesArray' is actually an array before stringifying
     if (!Array.isArray(favoritesArray)) {
     console.error(
     "saveFavoritesToStorage: Input is not an array.",
     favoritesArray
     );
     // Decide how to handle: throw error, or save empty array, or do nothing.
     // For safety, let's save an empty array if a non-array is passed.
     localStorage.setItem(FAVORITES_KEY, JSON.stringify([]));
     return;
     }
     const favoritesJson = JSON.stringify(favoritesArray);
     localStorage.setItem(FAVORITES_KEY, favoritesJson);
    } catch (error) {
     console.error("Error saving favorites to localStorage:", error);
     // Potentially handle quota exceeded errors or other storage issues
     // If stringify fails (e.g., circular references, though unlikely for movie objects)
     // an error will be thrown.
    }
    };
    // Add a single movie object to the list of favorites in localStorage
    export const addFavoriteToStorage = (movieToAdd) => {
    // 1. Validate the movie object
    if (!movieToAdd || typeof movieToAdd.id === "undefined") {
     console.warn(
     "Attempted to add invalid movie object to favorites:",
     movieToAdd
     );
     return getFavoritesFromStorage(); // Return the current state of favorites without changes
    }
    // 2. Get the current list of favorites from localStorage
    const currentFavorites = getFavoritesFromStorage();
    // 3. Check if the movie is already in favorites
    const isAlreadyFavorite = currentFavorites.some(
     (favMovie) => favMovie.id === movieToAdd.id
    );
    if (isAlreadyFavorite) {
     // console.log(`Movie "${movieToAdd.title}" is already a favorite.`);
     return currentFavorites; // Return the list unchanged
    } else {
     // 4. "Concatenate" / Append: Add the new movie to the array
     const updatedFavorites = [...currentFavorites, movieToAdd];
     // 5. Save the entire updated list back to localStorage
     saveFavoritesToStorage(updatedFavorites);
     // console.log(`Movie "${movieToAdd.title}" added to favorites.`);
     return updatedFavorites; // Return the new, updated list
    }
    };
    // Remove a movie from favorites by ID
    export const removeFavoriteFromStorage = (movieIdToRemove) => {
    if (typeof movieIdToRemove === "undefined") {
     console.warn("Attempted to remove favorite with undefined movieId.");
     return getFavoritesFromStorage();
    }
    const currentFavorites = getFavoritesFromStorage();
    const updatedFavorites = currentFavorites.filter(
     (favMovie) => favMovie.id !== movieIdToRemove
    );
    // Check if anything was actually removed to avoid unnecessary saves (optional optimization)

    if (updatedFavorites.length < currentFavorites.length) {
     saveFavoritesToStorage(updatedFavorites);
     // console.log(`Movie with ID ${movieIdToRemove} removed from favorites.`);
    } else {
     // console.log(`Movie with ID ${movieIdToRemove} not found in favorites to remove.`);
    }
    return updatedFavorites;
    };
    // Check if a movie is a favorite by ID
    export const isFavoriteInStorage = (movieId) => {
    if (typeof movieId === "undefined") return false;
    const favorites = getFavoritesFromStorage();
    return favorites.some((favMovie) => favMovie.id === movieId);}