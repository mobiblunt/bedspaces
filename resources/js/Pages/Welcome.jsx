import Hero from '@/Components/Hero';
import Listings from '@/Components/Listings';
import Guest from '@/Layouts/GuestLayout';
export default function Welcome({ auth, listings }) {
    return (
        <>
            
            <Guest title="Bedspace" auth={auth}>
            <Hero title="Experience Great Apartments"/>
            <Listings listings={listings} />
            </Guest>
            
        </>
    );
}
