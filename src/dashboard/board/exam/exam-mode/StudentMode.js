import React from 'react';
import { Link } from 'react-router-dom';

import './StudentMode.css';
import ButtonPrimary from '../../../../buttons/ButtonPrimary';
import  { ExamingConsumer } from '../../../../context/ExamingContext';

function StudentMode(props) {
    const { teacher, participants } = props;

    return (
        <div className="StudentMode">
            <div className="attempt">
                <ExamingConsumer>
                    {
                        ({ attemptNow }) =>
                            <Link onClick={attemptNow} to="/exam/multi-question">
                                <ButtonPrimary>Attempt now</ButtonPrimary>
                            </Link>
                    }
                </ExamingConsumer>
            </div>
            <div className="participants">{participants} participants</div>
            <div className="teacher">{teacher}</div>
        </div>
    );
}

export default StudentMode;