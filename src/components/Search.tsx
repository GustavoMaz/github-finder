type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

import { useState } from "react"

import { BsSearch } from "react-icons/bs"

function Search({ loadUser }: SearchProps) {
  const [userName, setUserName] = useState('')

  return (
    <div>
      <label htmlFor="search">Busque por um usuário: </label>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search