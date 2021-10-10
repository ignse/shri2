import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../routes/routes';
import styles from './app.module.css';
import {AppContext} from './appContext';

function App() {

    const settings = useState({ repo_name: '', build_command: '', branch: '', sync_time: ''});

    return (
        <Router>
            <div className={styles.content}>
                <AppContext.Provider value={settings}>
                    <Routes />
                </AppContext.Provider>
            </div>
        </Router>
    );
}

export default App;