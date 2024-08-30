import loading from '../img/loading.svg'

import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <img src={loading} className={styles.loader} />
    </div>
  )
}

export default Loading