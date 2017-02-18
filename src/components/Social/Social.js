import React, { Component } from 'react';
import '../../assets/css/fonts.css';
import '../../assets/css/App.css';
import styles from './Social.css';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGlobe from 'react-icons/lib/fa/globe';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

class Social extends Component {
    render() {
        return (
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <a style={styles.listLink} href="https://www.facebook.com/events/985534291591681/"><FaFacebook /></a>
                </li>
                <li style={styles.listItem}>
                    <a style={styles.listLink} href="#"><FaGlobe /></a>
                </li>
                <li style={styles.listItem}>
                    <a style={styles.listLink} href="#"><FaMapMarker /></a>
                </li>
            </ul>
        );
    }
}

export default Social;