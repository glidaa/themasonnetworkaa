import { Link } from 'react-router-dom'

const SLink = ({
    className = '',
    to,
    children
}: {
    className?: string,
    to: string,
    children: React.ReactNode
}) => {
    return (
        <Link className={className} to={to} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {children}
        </Link >
    )
}

export default SLink