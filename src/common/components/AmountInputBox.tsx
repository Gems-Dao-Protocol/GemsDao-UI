import InputBoxContainer from './InputBoxContainer'

interface InputBoxProps {
    id: string
    placeholder: string
    decimals: number
    onChange: (val: any) => void
}

export default function AmountInputBox({ id, placeholder, decimals = 18, onChange }: InputBoxProps) {
    return (
        <InputBoxContainer>
            <input
                id={id}
                type="text"
                className="token-amount-input w-full bg-[#000A21] text-white text-[18px] md:text-[20px] rounded-md block w-full p-0 focus:outline-none min-w-[80px]"
                placeholder={placeholder}
                onKeyPress={(e) => {
                    let ev: any = e.target;
                    ((ev.value.toString().indexOf('.') >= 0) && ev.value.toString().substring(ev.value.toString().indexOf('.') + 1).length >= decimals) && e.preventDefault();
                    ((ev.value.toString().indexOf('.') >= 0) && e.key === '.') && e.preventDefault();
                    ((ev.value.toString().length <= 0) && e.key === '.') && e.preventDefault();
                    (!((e.key === '.') || (e.key >= '0' && e.key <= '9'))) && e.preventDefault();
                }}
                onChange={(event) => onChange(event.target.value)}
            />
        </InputBoxContainer>
    )
}