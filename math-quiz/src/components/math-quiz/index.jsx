import { useState } from 'react';
import Answer from '../answer';

import styles from './math-quiz.module.css';

const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const MathQuiz = () => {
    const [a, setA] = useState(generateRandomNumber());
    const [b, setB] = useState(generateRandomNumber());
    const [score, setScore] = useState(0);

    const updatePoints = isCorrect => {
        setScore(prevScore => prevScore + (isCorrect ? 1 : -1));
        generateNewQuestion();
    };

    const generateNewQuestion = () => {
        setA(generateRandomNumber());
        setB(generateRandomNumber());
    };

    return (
        <div className={styles.quiz}>
            <h1 className={styles.title}>Math Quiz</h1>
            <div className={styles.question}>
                Сколько будет {a} + {b}?
            </div>
            <div className={`${styles.score} ${score > 0 ? styles.textSuccess : styles.textError}`}>
                Ваш счет: {score}
            </div>
            <Answer a={a} b={b} updatePoints={updatePoints} />
        </div>
    );
};

export default MathQuiz;
