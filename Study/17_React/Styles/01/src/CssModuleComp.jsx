import styles from './styles/CssModule.module.css'

function CssModuleComp() {
  console.log(styles)
  return ( 
    <div>
      <h1 className={styles.container}>CssModuleComp</h1>
      <div className={[styles.red, styles.box].join(' ')}></div>
      <div className={[styles.orange, styles.box].join(' ')}></div>
      <div className={[styles.green, styles.box].join(' ')}></div>
    </div>
   );
}

export default CssModuleComp;