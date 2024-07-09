import { Link, Head } from '@inertiajs/react';
import Hero from '@/Components/Hero';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import HomeCards from '@/Components/HomeCards';
import Listings from '@/Components/Listings';
import Guest from '@/Layouts/FrontLayout';
export default function Welcome({ auth, listings }) {
    return (
        <>
           <Guest auth={auth} title="Bedspace">
            <Hero title="Experience Great Apartments"/>
            <Listings listings={listings} />
            </Guest>
        </>
    );
}
