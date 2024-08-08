import styles from './city-card.module.css';

const CityCard = ({ city }) => {
    if (!city) return <div className={styles.empty}>Пожалуйста, выберите город.</div>;

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{city.name}</h2>
            <img src={city.imageUrl} alt={city.name} className={styles.image} />
            <p className={styles.description}>{city.description}</p>
            <ul className={styles.facts}>
                {city.facts.map((fact, index) => (
                    <li key={index} className={styles.fact}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default CityCard;
