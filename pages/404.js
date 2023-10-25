import Heading from "../components/Heading";
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="not-found">
            <Heading pageTitle="404 Error" />
            <h1>Page Not Found</h1>
            <p>The page you&apos;re looking for isn&apos;t here.  Perhaps start again from <Link legacyBehavior href="/"><a>Home</a></Link>.</p>
        </div>

    );
}

export default NotFound;
