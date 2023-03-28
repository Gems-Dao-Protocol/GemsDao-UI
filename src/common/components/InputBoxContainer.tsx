import { ReactNode } from 'react';

export default function InputBoxContainer({ children }: { children: ReactNode }) {
    return (
        <form autoComplete="off" style={{ width: "100%" }}>
            {children}
        </form>
    )
}