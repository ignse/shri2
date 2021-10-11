import React from 'react';
import styles from './home.module.css';
import {Button} from '../ui/button';
import {SettingsIcon} from '../ui/icons';
import {Logo} from '../ui/logo';
import Footer from '../components/footer/footer';
import {NavLink, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

export function HomePage() {

    const { settings } = useSelector(store => store);

    if (settings && settings.repo_name) {
        return (
            <Redirect
                to={{
                    pathname: '/history'
                }}
            />
        );
    }

    return (
      <>
          <main className={styles.container}>
            <header className={styles.header}>
                <NavLink to={'/'}>School CI server</NavLink>
                <NavLink to={'/settings'} >
                <Button icon={<SettingsIcon />}>
                    Settings
                </Button>
                </NavLink>
            </header>
            <section className={styles.content}>
                <Logo />
                <NavLink to={'/settings'} >
                    <Button type='primary'>Open settings</Button>
                </NavLink>
            </section>
          </main>
          <Footer />
      </>
  );
}
