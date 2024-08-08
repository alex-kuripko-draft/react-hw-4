import styles from './city-selector.module.css';

const CitySelector = ({ cities, onSelectCity }) => {
    return (
        <div className={styles.selector}>
            <label htmlFor="citySelect" className={styles.label}>Выберите город:</label>
            <select id="citySelect" onChange={(e) => onSelectCity(e.target.value)} className={styles.select}>
                <option value="">-- Выберите город --</option>
                {cities.map((city, index) => <option key={index} value={city.name}>{city.name}</option>)}
            </select>
        </div>
    );
};

export default CitySelector;
