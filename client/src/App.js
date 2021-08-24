import React from 'react';
import './App.css';
function App() {
    return (
        <div className="App">
            <header className="App-header">
            <video controls muted>
                <source src="http://svio-webdemo.vercel.app/" type="video/mp4"></source>
            </video>
            </header>
        </div>
    );
}
export default App;
