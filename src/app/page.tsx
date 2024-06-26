import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Card from '@/components/Card';
import image from '../../public/images/image.webp';
import ButtonRedirect from '@/components/ButtonRedirect';
import { redirect } from 'next/navigation';
const isAuth = false;
export default function Home() {
    // render server
    // console.log(isAuth);
    console.log('Home page');
    // if (!isAuth) {
    //     redirect('/login');
    // }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <Button variant="outline" className="text-mini">
                Button
            </Button> */}
            <ButtonRedirect />
            <h1 className="font-sans">Hello</h1>
            <Card />
            <Image
                alt="pexels"
                src={
                    'https://images.pexels.com/photos/22638802/pexels-photo-22638802/free-photo-of-thanh-ph-hoang-hon-ngh-thu-t-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }
                width={500}
                height={100}
                quality={100}
                priority
            />
            <Image src="/images/image.webp" width={500} height={100} alt="image" quality={100} />
            <Image src={image} width={500} height={100} alt="image" quality={100} />
        </main>
    );
}
