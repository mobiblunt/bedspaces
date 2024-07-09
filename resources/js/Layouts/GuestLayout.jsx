import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function Guest({ title,auth,children }) {
    return (
        <>
            <Head title={title} />
            <Navbar auth={auth} />
            {children}
            <Footer />
            </>
    );
}
