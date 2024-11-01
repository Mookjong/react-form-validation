import { useRef, useState, useEffect} from 'react'
import { faCheck, faTimes, faInfoCircle, faL} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { USER_REGEX, PWD_REGEX } from './constants'

const Register = () => {
    const userRef = useRef(null)
    const errRef= useRef(null)

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
    <div>
       
    </div>
  )
}

export default Register