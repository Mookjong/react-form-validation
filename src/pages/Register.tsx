import { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { USER_REGEX, PWD_REGEX } from '../constants'
import Label from '../components/Label'

const Register = () => {
    const userRef = useRef<HTMLInputElement>(null!)
    const errRef = useRef<HTMLParagraphElement>(null!)

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState("")
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState("")
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        // when component is mounted, focus on the 'user' input
        userRef.current.focus()
    }, [])

    // every time user is modified, it's test to see if it's valid against the regex
    useEffect(() => {
        const result = USER_REGEX.test(user)
        console.log(result)
        console.log(user)
        setValidName(result)
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)

        const match = pwd === matchPwd
        setValidMatch(match)
    }, [matchPwd, pwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    return (
        <section className='form'>
            <p ref={errRef} className={errMsg ? 'errmgs' : 'offscreen'}>{errMsg}</p>
            <h1>Register</h1>
            <form action="">
                {/* USERNAME FIELD */}
                <Label isValueValid={validName} value={user}>Username</Label>
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
                <p id='uidnote' className={userFocus && user && !validName ? "instruction" : "offscreen"}>
                    <span className='invalid'><FontAwesomeIcon icon={faInfoCircle} /></span>&nbsp;
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed
                </p>


                {/* PASSWORD FIELD */}
                <label htmlFor="password">
                    Password:
                    <span className={validPwd ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </label>
                <input
                    type="password"
                    id='username'
                    autoComplete='off'
                    onChange={e => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? 'false' : 'true'}
                    aria-describedby='pwdnote'
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                />
                <p id='pwdnote' className={pwdFocus && !validPwd ? "instruction" : "offscreen"}>
                    <span className='invalid'><FontAwesomeIcon icon={faInfoCircle} /></span>&nbsp;
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number<br/>
                    and a special character:
                    &nbsp;
                    <span aria-label='exclamation mark'>!</span>
                    <span aria-label='at symbol'>@</span>
                    <span aria-label='hashtag'>#</span>
                    <span aria-label='dollar sign'>$</span>
                    <span aria-label='percent'>%</span>
                </p>


            </form>
        </section>
    )
}

export default Register