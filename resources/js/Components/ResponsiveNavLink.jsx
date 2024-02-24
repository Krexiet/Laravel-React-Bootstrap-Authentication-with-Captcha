import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            class='btn btn-primary'
        >
            {children}
        </Link>
    );
}
