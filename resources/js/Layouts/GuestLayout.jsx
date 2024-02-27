import { Link } from '@inertiajs/react';
export default function Guest({ children }) {
    return (
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Тестове завдання </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" href={route('home')}>Домашня сторінка</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
                {children}
            </div>
                
    );
}
