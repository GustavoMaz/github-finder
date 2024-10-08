type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

import { useState, KeyboardEvent } from "react"

import { BsSearch } from "react-icons/bs"

import styles from './Search.module.css'

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState('')

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName)
    }
  }

  return (
    <div className={styles.search}>
      <label htmlFor="search">Busque por um usuário: </label>
      <p>Conheça seus melhores repositórios</p>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search