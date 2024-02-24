import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 >Кабінет Користувача</h2>}
        >
            <Head title="Кабінет користувача" />

           <div>
                <p>Ви успішно авторизувались!</p>
           </div>
        </AuthenticatedLayout>
    );
}
