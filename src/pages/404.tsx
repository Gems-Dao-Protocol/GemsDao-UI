import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

const Home404Page = (props) => {
    const router = useRouter()

    useEffect(() => {        
        // router.replace("/")
    })

    return (
        <div
            className='flex flex-col w-full justify-center items-center py-20 gap-4'
        >
            <>
                <h1 className='text-white'>404</h1>
                {/* <h2>
                    <Link href="/swap">
                        <a className='text-app-primary text-[16px] underline'>
                            Go To Home Page
                        </a>
                    </Link>
                </h2> */}
                <p className='text-[14px] text-white'>Sorry, the content you are looking for could not be found.</p>
            </>
        </div>
    );
};

export default Home404Page;