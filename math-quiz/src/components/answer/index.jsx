import { useState } from 'react';

import styles from './answer.module.css';

const Answer = ({ a, b, updatePoints }) => {
    const [userAnswer, setUserAnswer] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const correctAnswer = a + b;
        const isCorrect = parseInt(userAnswer, 10) === correctAnswer;
        updatePoints(isCorrect);
        setUserAnswer('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className={styles.input}
                placeholder="Ваш ответ"
            />
            <button type="submit" className={styles.button} disabled={!userAnswer}>
                Ответить
            </button>
        </form>
    );
};

export default Answer;
