import React, { useEffect } from 'react';
import styles from './history.module.css';
import {Button} from '../ui/button';
import Footer from '../components/footer/footer';
import {NavLink} from 'react-router-dom';
import BuildItem from '../ui/build-item';
import defaultData from '../utils/default-data';
import {PlayIcon, SettingsIcon} from '../ui/icons';
import Modal from '../components/modal/modal';
import {Input} from '../ui/input';
import {useDispatch, useSelector} from 'react-redux';
import {LOAD_BUILDS} from '../services/actions/builds';
import {HIDE_NEW_BUILD_POPUP, SHOW_NEW_BUILD_POPUP} from '../services/actions/modal';

export function HistoryPage() {

    const { settings, builds, modal } = useSelector(store => store);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({type: HIDE_NEW_BUILD_POPUP});
    };

    const onNewBuild = () => {
        dispatch({type: SHOW_NEW_BUILD_POPUP});
    };

    useEffect(() => {
        dispatch({type: LOAD_BUILDS, payload: defaultData});
    }, [dispatch]);

    return (
      <>
          <main className={styles.container}>
            <header className={styles.header}>
                <span className={styles.header_text}>
                    {settings.repo_name}
                </span>
                <span className={styles.header_buttons}>
                    <Button icon={<PlayIcon />} onClick={onNewBuild}>
                            Run build
                    </Button>
                    <NavLink to={'/settings'} >
                        <Button icon={<SettingsIcon />} />
                    </NavLink>
                </span>
            </header>
            <section className={styles.content}>
                <ul className='build_list'>
                    {builds.length && builds.map(build => <li key={build.buildNumber} className='build_list_item'><BuildItem {...build} /></li>)}
                </ul>
          </section>
          </main>
          <Footer />
          {modal.buildPopupVisible && <Modal onClose={closeModal}>
              <div className={styles.modal}>
                  <span>
                     <span className={styles.title}>New build</span>
                     <Input text='Enter the commit hash which you want to build.' placeholder='Commit hash' />
                  </span>
                  <span className={styles.buttons}>
                    <Button type='primary' onClick={closeModal}>Run build</Button>
                    <Button onClick={closeModal}>Cancel</Button>
                </span>
              </div>
          </Modal>}
      </>
  );
}
