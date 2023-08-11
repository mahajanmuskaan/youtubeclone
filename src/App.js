/**
 * The code imports necessary components and libraries from React, React Router DOM, and Material-UI (@mui/material).
The main component, named App, is defined. It appears to represent the root of the application.
Inside the App component, the BrowserRouter component is used from React Router DOM. This provides the routing functionality for the application.
A Box component from Material-UI is used to wrap the content of the application. It sets a black background color (#000).
A Navbar component is expected to be used.
The Routes component is used to define the routing structure for the application. It contains multiple Route components.
The first Route component is defined with the exact prop and a path of '/'. It is intended to render a Feed component when the root URL is accessed.
The second Route component is defined with the exact prop and a path of '/video/:id'. It is intended to render a VideoDetails component when a URL with a video ID parameter is accessed.
The third Route component is defined with the exact prop and a path of '/channel/:id'. It is intended to render a ChannelDetails component when a URL with a channel ID parameter is accessed.
The fourth Route component is defined with the exact prop and a path of '/search/:searchTerm'. It is intended to render a SearchFeed component when a URL with a search term parameter is accessed.
The App component is exported as the default export of the module.

 */

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Importing components here
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ChannelDetails from './components/ChannelDetails';
import VideoDetails from "./components/VideoDetails";
import SearchFeed from './components/SearchFeed';

const App = () => {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }}>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Feed />} />
                    <Route exact path="/video/:id" element={<VideoDetails />} />
                    <Route exact path="/channel/:id" element={<ChannelDetails />} />
                    <Route exact path="/search/:searchTerm" element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;
