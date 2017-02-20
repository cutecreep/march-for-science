import React, { Component } from 'react';
import styles from './ModuleTwo.css';

import FaFlask from 'react-icons/lib/fa/flask';
import FaBinoculars from 'react-icons/lib/fa/binoculars';
import FaUser from 'react-icons/lib/fa/user'; 

class Hero extends Component {
    render() {
        return (
            <section id="two" className="wrapper alt style2">
                <section className="spotlight">
                    <div className="image" style={styles.iconContainer}>
                        <FaFlask style={styles.icon} />
                    </div>
                    <div className="content">
                    <p>The March for Science is a celebration of our passion for science and a call to support and safeguard the scientific community. Recent policy changes have caused heightened worry among scientists, and the incredible and immediate outpouring of support has made clear that these concerns are also shared by hundreds of thousands of people around the world. The mischaracterization of science as a partisan issue, which has given policymakers permission to reject overwhelming evidence, is a critical and urgent matter. It is time for people who support scientific research and evidence-based policies to take a public stand and be counted.</p>
                </div>
                </section>
                <section className="spotlight">
                    <div className="image" style={styles.iconContainer}>
                        <FaBinoculars style={styles.icon} />
                    </div>
                    <div className="content">
                    <h2>WHY A MARCH?</h2>
                    <p>
                        A recent focus on science and how scientific findings impact public policy has put a spotlight on the scientific community and their research. We accept that science, as a field of knowledge and way of thinking, is not swayed by politics or opinions; it is nonpartisan and all-inclusive. This is the time for us to come together as one community, take a stand, and lead a new conversation.
                    </p>
                </div>
                </section>
                <section className="spotlight">
                    <div className="image" style={styles.iconContainer}>
                        <FaUser style={styles.icon} />
                    </div>
                    <div className="content">
                    <h2>WHO ARE WE?</h2>
                    <p>We are scientists and science enthusiasts. We come from all races, all religions, all gender identities, all sexual orientations, all abilities, all socioeconomic backgrounds, all political perspectives, and all nationalities. Our diversity is our greatest strength: a wealth of opinions, perspectives, and ideas is critical for the scientific process. What unites us is a love of science, and an insatiable curiosity. We all recognize that science is everywhere and affects everyone.</p>
                </div>
                </section>
            </section>
        );
    }
}

export default Hero;