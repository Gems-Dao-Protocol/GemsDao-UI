import InputBoxContainer from './InputBoxContainer'

interface InputBoxProps {
    type: string
    value: any
    placeholder: string
    required: boolean
    id: string
    onChange: (val: any) => void
    handleFocus: () => void
    handleBlur: () => void
}

export default function CommonInputBox({ type, value, placeholder, required, id, onChange, handleFocus, handleBlur }: InputBoxProps) {

    return (
        <InputBoxContainer>
            <input
                id={id}
                type={type}
                className="bg-app-content text-white text-[16px] rounded-sm block w-full p-0 focus:outline-none"
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                onChange={(event) => onChange(event.target.value)}
                value={value}
                required={required ? true : false}
            />
        </InputBoxContainer>
    )
}