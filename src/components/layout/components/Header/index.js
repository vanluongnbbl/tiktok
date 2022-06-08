import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assests/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images?.logo} alt="logo tiktok" />
                <div className={cx('search')}>
                    <input placeholder="Search acounts and video" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>Actions</div>
            </div>
        </header>
    );
}

export default Header;
