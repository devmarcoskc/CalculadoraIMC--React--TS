import styles from './App.module.css';
import { useState } from 'react';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/gridItem';
import LeftArrowIMG from './assets/leftarrow.png';

const App = () => {
  const [heightInput, setHeightInput] = useState<number>(0);
  const [weightInput, setWeightInput] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>(null);

  const handleCalculateBttn = () => {
    if(heightInput && weightInput) {
      setShowItem(calculateImc(heightInput, weightInput));
    } else {
      alert('Digite os campos');
    }
  }

  const resetInfos = () => {
    setHeightInput(0);
    setWeightInput(0);
    setShowItem(null);   
  }

  return (
    <div className={styles.main}>
      <header>
          <div className={styles.headerContainer}>
            <h1>CALCULADORA IMC</h1>
          </div>
      </header>
      <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu IMC:</h1>
            <p>IMC é a sigla para índice de Massa corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa</p>
            
            <input
              type="number"
              placeholder="Digite sua altura. Ex: 1.5(em métros)"
              value={heightInput > 0 ? heightInput : ''}
              onChange={e => setHeightInput(parseFloat(e.target.value))}
              disabled = {showItem ? true : false}
            />
            <input
              type="number"
              placeholder="Digite seu peso. Ex: 70.5(em kg)"
              value={weightInput > 0 ? weightInput : ''}
              onChange={e => setWeightInput(parseFloat(e.target.value))}
              disabled = {showItem ? true : false}
            />

            <button onClick={handleCalculateBttn} disabled = {showItem ? true : false}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            {!showItem &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                 <GridItem key={key} item={item}/>
              ))}
            </div>
            }
            {showItem &&
            <div className={styles.resultInfos}>
              <div className={styles.rightArrow} onClick={resetInfos}>
                  <img src={LeftArrowIMG} alt="" width={25}/>
              </div>
              <GridItem item={showItem}/>
            </div>
            }
          </div>
      </div>
    </div>
  )
}

export default App;