import React from 'react'

const Input = () => {
  return (
    
        <input
                    type="text"
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={e => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? 'false' : 'true'}
                    aria-describedby='uidnote'
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />

  )
}

export default Input