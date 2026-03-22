import React from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type Size = 'v1' | 'v2'

type SharedProps = {
    size?: Size
    className?: string
    children: React.ReactNode
}

type ButtonProps =
    | (SharedProps & { variant: 'link'; src: string; onClick?: never })
    | (SharedProps & { variant?: ButtonVariant; src?: never; onClick?: () => void })

const Button = ({
    variant = 'primary',
    size = 'v1',
    className = '',
    children,
    ...rest
}: ButtonProps) => {
    const classNames = [
        styles.base,
        styles[variant],
        styles[`size_${size}`],
        className,
    ]
        .filter(Boolean)
        .join(' ')

    if (variant === 'link') {
        const { src } = rest as { src: string }
        return (
            <a href={src} className={classNames}>
                {children}
            </a>
        )
    }

    const { onClick } = rest as { onClick?: () => void }

    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button