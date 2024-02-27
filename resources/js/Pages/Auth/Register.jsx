import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        captcha: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), { captcha: data.captcha });
    };

    return (
        <GuestLayout>
            <Head title="Регістрація" />
            <div class="container form">
            <form onSubmit={submit}>
            <div class="mb-3">
                <label class="form-label">Ім'я</label>
                <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        class="form-control"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        class="form-control"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                <InputError message={errors.email} className="mt-2" />
            </div>
            <div class="mb-3">
                <label class="form-label">Пароль</label>
                <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        class="form-control"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                <InputError message={errors.password} className="mt-2" />
            </div>
            <div class="mb-3">
                <label class="form-label">Підтвердіть пароль</label>
                <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        class="form-control"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                <InputError message={errors.password_confirmation} className="mt-2" />
            </div>
            <div className="mb-3">
                    <img src="/captcha" alt="captcha" class="mb-2"/>
                        <TextInput
                            id="captcha"
                            name="captcha"
                            class="form-control"
                            value={data.captcha}
                            className="form-control"
                            onChange={(e) => setData('captcha', e.target.value)}
                        />
                        <InputError message={errors.captcha} className="mt-2" />
                    </div>
            <PrimaryButton>
                        Регістрація
            </PrimaryButton>
            <Link class="btn btn btn-secondary ms-2" href={route('login')}>Увійти</Link>
            </form>


            </div> 
        </GuestLayout>
    );
}
