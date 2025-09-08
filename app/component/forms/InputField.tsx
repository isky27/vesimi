import { FormGroup, Label, Input } from "reactstrap";

const InputField = ({ type, name, Id, placeholder, label, onChange, value, onKeyDown, disabled, checked, onClick, required = false, errors="", touched=false }: any) => {
    return (
        <>
            <FormGroup>
                {label && <Label for={Id}>{label} {required && <span className="text-danger">*</span>}</Label>}
                <Input type={type} name={name} id={Id} checked={checked} onClick={onClick} placeholder={placeholder} disabled={disabled} onChange={onChange} value={value} onKeyDown={onKeyDown} />
            </FormGroup>
            {touched && errors && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                        {errors}
                    </span>
            )}
        </>
    )
}
InputField.defaultProps = {
    disabled: false,
}
export default InputField