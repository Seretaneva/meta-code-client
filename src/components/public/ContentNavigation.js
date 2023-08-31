import React, { useEffect, useRef, useState } from 'react';
import './../../App.css';
import PublicNavigation from './PublicNavigation';
import TopicsNavigation from './TopicsNavigation';
import ChapterNavigation from './ChapterNavigation';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './PublicApp.module.css';
import PublicFooter from './PublicFooter';

function ContentNavigation() {
    const { topicId, lessonId } = useParams();
    const hamburgerIconRef = useRef(null);
    const menuRef = useRef(null);
    const [lessonContent, setLessonContent] = useState('');

    // Toggle menu visibility
    const toggleMenu = () => {
        menuRef.current?.classList.toggle(styles.menushow);
    };

    // Fetch lesson content
    const fetchLessonContent = lessonId => {
        fetch(`http://localhost:8080/lesson/${lessonId}/content`)
            .then(res => res.json())
            .then(
                result => setLessonContent(result.lessonContent),
                error => console.error('Failed to fetch lesson content:', error)
            );
    };

    // Fetch content on lessonId change
    useEffect(() => {
        lessonId && fetchLessonContent(lessonId);
    }, [lessonId]);

    // Handle click outside menu and window resize
    useEffect(() => {
        const handleClickOutside = event => {
            const isMenuClick = menuRef.current?.contains(event.target);
            const isHamburgerClick = hamburgerIconRef.current?.contains(event.target);

            if (!isMenuClick && !isHamburgerClick) {
                menuRef.current?.classList.remove(styles.menushow);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 1000) {
                menuRef.current?.classList.remove(styles.menushow);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <PublicNavigation />
            <TopicsNavigation />
            <div className={styles.content_container}>
                <div className={styles.left_menu}>
                    <div className={`${styles.sidenav} ${styles.chapters_content}`}>
                        <div className={styles.left}>
                            <div className={styles.menu_container}>
                                <div
                                    className={styles.hamburger_icon}
                                    onClick={toggleMenu}
                                    ref={hamburgerIconRef}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div ref={menuRef} className={styles.menu}>
                                    <ChapterNavigation
                                        topicId={topicId}
                                        onLessonClick={fetchLessonContent}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.middle_contant}
                    dangerouslySetInnerHTML={{ __html: lessonContent }}
                />
                <div className={styles.right_ads}>
                    <div className={`well`}><p>ADS</p></div>
                    <div className={`well`}><p>ADS</p></div>
                </div>
            </div>
            <PublicFooter />
        </div>
    );
}

export default ContentNavigation;
