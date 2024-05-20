'use client';
import { Button } from '@/components/ui/button';
import { redirect, useRouter } from 'next/navigation';
const isAuth = false;
const ButtonRedirect = () => {
    const router = useRouter();

    //working
    // if (!isAuth) {
    //     redirect('/login');
    // }
    const handleNavigate = () => {
        router.push('/login');

        //  redirect('/login'); // not working
    };
    return (
        <Button onClick={handleNavigate} variant={'outline'}>
            Redirect LoginPage
        </Button>
    );
};

export default ButtonRedirect;
