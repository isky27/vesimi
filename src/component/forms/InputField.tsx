import { FormGroup, Label, Input } from "reactstrap";

const InputField = ({ type, name, Id, placeholder, label, onChange, value, onKeyDown, disabled, checked, onClick }: any) => {
    return (
        <FormGroup>
            <Label for={Id}>{label}</Label>
            <Input type={type} name={name} id={Id} checked={checked} onClick={onClick} placeholder={placeholder} disabled={disabled} onChange={onChange} value={value} onKeyDown={onKeyDown} />
        </FormGroup>
    )
}
InputField.defaultProps = {
    disabled: false,
}
export default InputField