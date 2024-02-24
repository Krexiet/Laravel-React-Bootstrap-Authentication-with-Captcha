import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div>
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Тестове завдання</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" href="/">Головна</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="/dashboard">Кабінет користувача</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href={route('profile.edit')}>Налаштування користувача</a>
                    </li>
                </ul>
                <span class="navbar-text">
                    <div class="text-white">{user.name}</div>
                </span>
                <span class="navbar-text ms-2">
                    <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                    Вийти
                    </ResponsiveNavLink>
                </span>

                
                </div>
            </div>
            </nav>
        </div>
            

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
