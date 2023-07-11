import React, { useEffect, useState } from 'react';
import styles from './PublicApp.module.css';
import { Link } from 'react-router-dom';
import PublicFooter from './PublicFooter';

function HomeComponent() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/topic/all', { mode: 'cors' })
            .then(res => res.json())
            .then(result => {
                setTopics(result);
            }, 
            error => {
                console.log('Error fetching topics:', error);
            });
    }, []);

    return (
        <div className={styles.home_container}>
            <div className={styles.hero_section}>
                <h1 className={styles.home_title}>Bine ați venit la lecțiile noastre de programare!</h1>
                <p className={styles.home_intro}>Aici veți găsi o varietate de subiecte pentru a începe sau pentru a vă îmbunătăți abilitățile de programare. De la JavaScript la Python, avem tot ce aveți nevoie pentru a vă dezvolta abilitățile de programare!</p>
            </div>
            <div className={styles.featured_section}>
                <h2 className={styles.home_subtitle}>Subiectele noastre</h2>
                <div className={styles.topics_container}>
                    {topics.map(topic => (
                        <Link key={topic.topicId} to={`/topics/${topic.topicId}`} className={styles.topic_button}>
                            {topic.topicName}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.about_section}>
                <p className={styles.home_info}>Portalul nostru se adresează vorbitorilor de limba română din Moldova și România. Ne dedicăm în a face programarea accesibilă pentru toți, oferind lecții detaliate și probleme practice pentru a vă îmbunătăți abilitățile. Fiecare problemă vine cu o soluție detaliată, astfel încât să puteți învăța la maxim din fiecare provocare.</p>
            </div>
            <div className={styles.invite_section}>
                <p className={styles.home_invite}>Vă invităm să începeți călătoria dvs. în programare cu noi!</p>
            </div>
            <PublicFooter/>
        </div>
    );
}

export default HomeComponent;
