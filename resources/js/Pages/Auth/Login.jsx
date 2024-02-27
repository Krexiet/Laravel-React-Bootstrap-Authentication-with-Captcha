import { useEffect, useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, captchaImage }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
        captcha: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), { captcha: data.captcha });
    };

    return (
        <GuestLayout>
            <Head title="Вхід" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div class="container form">
                <form onSubmit={submit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            class="form-control"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Пароль</label>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            class="form-control"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2" />
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
                    <div class="form-check mb-3">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            Запам'ятати мене
                        </label>
                    </div>
                    <PrimaryButton disabled={processing}>
                        Увійти
                    </PrimaryButton>
                    <Link class="btn btn-secondary ms-2" href={route('register')}>Регістрація</Link>
                </form>
            </div>
        </GuestLayout>
    );
}