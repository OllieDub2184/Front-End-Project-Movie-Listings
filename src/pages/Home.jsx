import React, { useState, useEffect, useCallback } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import MovieGrid from '../components/MovieGrid';
import { getPopularMovies, searchMovies } from '../services/moviesServices';
import { Spinner } from 'react-bootstrap'
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import PaginationComponent from '../components/Pagination';


const Home = () => {
    const [currentPage, setCurrentPage ] = useState (1)
    const [totalPages, setTotalPages] = useState (0)
    const [showMovies, setShowMovies] = useState (false)
    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [error, setError] = useState(null)
    const handleSearchQueryChange = (query) => { setSearchQuery(query) }
    const performSearch = async (query, page = 1) => {
        try {
            const data = await searchMovies(query, page)
            setMovies(data.results || [])
            setTotalPages(data.total_pages || 0)
            setCurrentPage(data.page || 1)
            setShowMovies(true)
        } catch (error) {
            setError("Failed to fetch search results. Please try again")
            setMovies([])
        }

    }

    const handleSearchSubmit = () => { performSearch(searchQuery, 1) }
    const onPageChange = (page)=> {setCurrentPage(page)
        performSearch(searchQuery,page)
    }


    return (<div>
        <h1 className="mb-4 text-centre">
            MovieSearch
        </h1>
        <SearchBar searchQuery={searchQuery} onSearchQueryChange={handleSearchQueryChange} onSubmit={handleSearchSubmit} />
      {  showMovies&&(<> <MovieGrid movies={movies}/>{totalPages>1&& (<PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>) } </>)}
    </div>)

};

export default Home;