import { Link, Head } from '@inertiajs/react';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import HomeCards from '@/Components/HomeCards';
import Listings from '@/Components/Listings';
export default function Welcome({ auth, listings }) {
    return (
        <>
            <Head title="Bedspace" />
            <Navbar auth={auth} />
            <Hero title="Experience Great Apartments" subtitle="Rent apartments for less than hotels everywhere in Nigeria"/>
            
            <Listings listings={listings} />
            <Footer />
        </>
    );
}
