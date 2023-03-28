import { CircularProgress, Fade } from '@mui/material';
import { PropsWithChildren, ReactNode, useState } from 'react';
import { Expression } from 'typescript';

function LoadingButton(props:
    {
        type: "primary" | "secondary",
        disabled?: boolean,
        onClick?: () => void,
        style?: any
        children: ReactNode
        loading?: boolean
    }
) {
    return (
        <button
            className={props.type === 'primary' ? "primary-btn" : 'secondary-btn'}
            disabled={props.disabled || props.loading}
            onClick={props.onClick}
            style={props.style}
        >
            {props.loading ?
                <div className='flex gap-2 items-center justify-center'>
                    <Fade in={true} style={{ transitionDelay: '800ms' }} unmountOnExit>
                        <CircularProgress size='1rem' color={props.type === 'primary' ? 'secondary' : 'primary'} />
                    </Fade>
                    {props.children}
                </div>
                :
                <>
                    {props.children}
                </>
            }

        </button>
    )
}

export { LoadingButton }