import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/routes';
import styles from './app.module.css';

function App() {

    return (
        <Router>
            <div className={styles.content}>
                <Routes />
            </div>
        </Router>
    );
}

export default App;