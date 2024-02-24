import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark"> 
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Тестове завдання</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Домашная сторінка</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Ще якась сторінка</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Ще якась сторінка</a>
                    </li>
                </ul>
                <span class="navbar-text">
                {auth.user ? (
                        <Link
                            href={route('dashboard')}
                        >
                            Кабінет користувача
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                            >
                                Вхід
                            </Link>

                            <Link
                                href={route('register')}
                                class="ms-3"
                            >
                                Регістрація
                            </Link>
                        </>
                    )}
                </span>
                </div>
            </div>
            </nav>
            <div class="container">
                <h1 class="text-center mt-5">Тестове завдання Laravel+React+Bootstrap</h1>
            </div>  
        </>
    );
}
