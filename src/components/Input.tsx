import { ForwardedRef, forwardRef, PropsWithChildren, useId, useState } from "react"
import { faInfoCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type InputProps = PropsWithChildren<{
    type: "text" | "password"
    autocomplete: React.HTMLInputAutoCompleteAttribute
    onChange: (v: string) => void
    isValueValid: boolean
    onFocus: (v: boolean) => void
    focus: boolean,
    value: string | number
    fieldId: string
    noteClassName: "instruction" | "offscreen"
}>

const Input = forwardRef(({
    type,
    autocomplete, 
    onChange, 
    isValueValid, 
    onFocus, 
    fieldId,
    noteClassName,
    value,
    children }: InputProps, 

    ref?: ForwardedRef<HTMLInputElement>) => {

    const id = useId()
    const [showPwd, setShowPwd] = useState(false)
    const [inputType, setInputType] = useState(type)

    const toggleShowPwd = () => {
        setShowPwd(s => !s)
        setInputType(type => (type === "text" ? "password" : "text"))
    }

    return (
        <>
            <input
                type={inputType}
                value={value}
                id={fieldId}
                ref={ref}
                autoComplete={autocomplete}
                onChange={e => onChange(e.target.value)}
                required
                aria-invalid={isValueValid ? 'false' : 'true'}
                aria-describedby={`describer-${id}`}
                onFocus={() => onFocus(true)}
                onBlur={() => onFocus(false)}
            />
            {type == "password" &&
                <span onClick={toggleShowPwd} className="show-password-icon">
                    {!showPwd ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                </span>
            }
            <p id={`describer-${id}`} className={noteClassName}>
                <span className='invalid'><FontAwesomeIcon icon={faInfoCircle} /></span>&nbsp;
                {children}
            </p>
        </>
    )
})

export default Input