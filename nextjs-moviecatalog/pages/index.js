import React from 'react';
import Head from 'next/head';
import SearchMovies from "./searchMovies";

export default function App() {
  return (
    <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies></SearchMovies>
    </div>
  )
}
