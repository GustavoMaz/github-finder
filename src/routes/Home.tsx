import { UserProps } from "../types/user";

import Search from "../components/Search"
import Loading from "../components/Loading"

import { useState } from "react"

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const loadUser = async (userName: string) => {
    setShowLoading(true)
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()
    
    const {avatar_url, login, location, followers, following} = data
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }
    setShowLoading(false)
    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && !showLoading &&
        <p>{user.login}</p>
      }
      {showLoading &&
        <Loading />
      }
    </div>
  )
}

export default Home