import React, {useContext, useState} from 'react';
import styles from './history.module.css';
import {Button} from '../ui/button';
import Footer from '../components/footer/footer';
import {NavLink} from 'react-router-dom';
import {AppContext} from '../components/app/appContext';
import BuildItem from '../ui/build-item';
import defaultData from '../utils/default-data';
import {PlayIcon, SettingsIcon} from '../ui/icons';
import Modal from '../components/modal/modal';
import {Input} from '../ui/input';

export function HistoryPage() {

    const [settings] = useContext(AppContext);
    const [form, setValue] = useState({ showModal: false});

    const closeModal = () => {
        setValue({ ...form, showModal: false });
    };

    const onNewBuild = () => {
        setValue({ ...form, showModal: true });
    };

    return (
      <>
          <main className={styles.container}>
            <header className={styles.header}>
                <NavLink to={''}>
                    <h3>
                        {settings.repo_name}
                    </h3>
                </NavLink>
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
                    {defaultData.map(build => <li key={build.buildNumber} className='build_list_item'><BuildItem {...build} /></li>)}
                </ul>
          </section>
          </main>
          <Footer />
          {form.showModal && <Modal onClose={closeModal}>
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
