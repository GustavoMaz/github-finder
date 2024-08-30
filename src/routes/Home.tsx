import { UserProps } from "../types/user"

import Search from "../components/Search"
import Loading from "../components/Loading"
import User from "../components/User"

import { useState } from "react"
import Error from "../components/Error"

function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const loadUser = async (userName: string) => {
    setShowLoading(true)
    setError(false)
    setUser(null)

    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json()
    
    setShowLoading(false)
    
    if (res.status === 404) {
      setError(true)
      return
    }

    const {avatar_url, login, location, followers, following} = data
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }
    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && !showLoading &&
        <User {...user}/>
      }
      {error &&
        <Error />
      }
      {showLoading &&
        <Loading />
      }
    </div>
  )
}

export default Home