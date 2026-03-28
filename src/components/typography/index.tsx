import React, { type JSX } from 'react'
import styles from './Typography.module.css'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type Size = 'v1' | 'v2' | 'm1' | 'm2' |  'v3' | 'v5' | 'v6' | 'm3' | 'biggest';
type Weight =
    | 'thin'
    | 'extralight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
type ColorToken = 'primary' | 'secondary' | 'lime' | 'violet' | 'aqua' | 'mint' | 'white';
type FontToken = 'sans' | 'mono'

const colorMap: Record<ColorToken, string> = {
    primary: 'var(--primary-color)',
    secondary: 'var(--secondary-color)',
    lime: 'var(--color-electric-lime)',
    violet: 'var(--color-soft-violet)',
    aqua: 'var(--color-aqua-glow)',
    mint: 'var(--color-mint-cream)',
    white: 'var(--color-white)',
}

const weightMap: Record<Weight, string> = {
    thin: 'var(--weight-thin)',
    extralight: 'var(--weight-extralight)',
    light: 'var(--weight-light)',
    regular: 'var(--weight-regular)',
    medium: 'var(--weight-medium)',
    semibold: 'var(--weight-semibold)',
    bold: 'var(--weight-bold)',
    extrabold: 'var(--weight-extrabold)',
    black: 'var(--weight-black)',
}

const fontMap: Record<FontToken, string> = {
    sans: 'var(--font-sans)',
    mono: 'var(--font-mono)',
}

interface TProps {
    variant?: Variant,
    size?: Size,
    weight?: Weight,
    color?: ColorToken | (string & {}),
    font?: FontToken,
    type?: string;
    className?: string;
    children: React.ReactNode
}

const Typography = ({
    variant = 'p',
    size,
    weight = 'regular',
    color = 'primary',
    font = 'sans',
    type = '',
    className,
    children }: TProps) => {
    const Tag = variant as keyof JSX.IntrinsicElements;
    const resolvedColor = colorMap[color as ColorToken] || color;
    const resolvedFont = fontMap[font];
    const resolvedWeight = weightMap[weight];
    const types = type.split(' ').filter(Boolean);
    const classNames = [
        styles.base,
        styles[variant],
        size && styles[`size_${size}`],
        ...types.map((t) => styles[t]),
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Tag
            className={classNames}
            style={{
                color: resolvedColor,
                fontFamily: resolvedFont,
                fontWeight: resolvedWeight,
            }}
        >
            {children}
        </Tag>
    )
}

export default Typography