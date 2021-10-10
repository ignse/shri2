import React, {useContext, useEffect, useState} from 'react';
import styles from './settings.module.css';
import {Button} from '../ui/button';
import Footer from '../components/footer/footer';
import {NavLink, Redirect} from 'react-router-dom';
import {Input} from '../ui/input';
import {Number} from '../ui/number';
import Modal from '../components/modal/modal';
import {AppContext} from '../components/app/appContext';

export function SettingsPage() {
    const [form, setValue] = useState({ repo_name: '', build_command: '', branch: '', sync_time: '', showModal: false, saved: false});

    const [settings, setSettings] = useContext(AppContext);

    const onChange = e => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const onSave = () => {
        if (!form.branch || !form.repo_name) {
            setValue({ ...form, showModal: true });
        }
        else {
            setSettings(form);
            setValue({ ...form, saved: true });
        }
    };

    const onCancel = () => {
        setValue(settings);
    };

    useEffect(() => {
        setValue(settings);
    }, [settings]);

    const closeModal = () => {
        setValue({ ...form, showModal: false });
    };

    if (form.saved) {
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
            </header>
            <section className={styles.content}>
                <span className={styles.title}>
                   Settings
                </span>
                <span className={styles.description}>
                   Configure repository connection and synchronization settings.
                </span>
                <Input text='GitHub repository' required={true} placeholder='user-name/repo-name' name='repo_name' value={form.repo_name} onChange={onChange} />
                <Input text='Build command' required={true} name='build_command' onChange={onChange} value={form.build_command} />
                <Input text='Main branch' name='branch' onChange={onChange} value={form.branch} />
                <span className={styles.sync}>Synchronize every <Number name='sync_time' onChange={onChange} value={form.sync_time} /> minutes</span>
                <span className={styles.buttons}>
                    <Button type='primary' onClick={onSave}>Save</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </span>
            </section>
          </main>
          <Footer />
          {form.showModal && <Modal onClose={closeModal}>
              <div className={styles.modal}>
                <span>Required fields should be filled!</span>
                <span>
                    <Button onClick={closeModal}>OK</Button>
                </span>
              </div>
          </Modal>}
      </>
  );
}
