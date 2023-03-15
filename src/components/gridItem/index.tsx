import { levels, calculateImc, Level } from "../../helpers/imc"
import styles from './gridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';
type Props = {
   item: Level;
}
export const GridItem = ({item}: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'down' ? downImage : upImage} alt="" width="30"/>
            </div>
            <div className={styles.gridTitle}>
                <h1>{item.title}</h1>
            </div>
            <div className={styles.gridInfos}>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </div>
            {item.yourImc && 
            <div className={styles.yourImcResult}>
                Seu IMC é <strong>{item.yourImc.toFixed(2)}</strong>
            </div>
            }

        </div>
    )
}