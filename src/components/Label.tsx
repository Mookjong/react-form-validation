import { faCheck, faTimes, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsWithChildren } from "react"


type LabelProps = PropsWithChildren<{
    isValueValid: boolean
    value: string
    fieldId: string
}>

const Label = ({ isValueValid, value, children, fieldId }: LabelProps) => {

    return (
        <label htmlFor={fieldId}>
            {children}:
            <span className={isValueValid ? "valid" : "hide"}>
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={isValueValid || !value ? "hide" : "invalid"}>
                <FontAwesomeIcon icon={faTimes} />
            </span>
        </label>
    )
}

export default Label