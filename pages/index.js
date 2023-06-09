import Layout from '../components/layout';
import Posthighlight from '../components/posthighlight';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
    return (
        <Layout title="CSAJ">

            <>
                <section className="">
                    <div className="flex max-w-full flex-row lg:flex-row space-x-24 relative mx-auto py-2 lg:py-2 px-16 lg:px-16">
                        <div className="w-1/2 lg:w-1/2 w-full lg:max-w-none max-w-2xl relative flex items-start justify-center flex-col">
                            <h1 className=" text-20xl md:text-4xl lg:text-5xl font-sans mb-8 relative text-blue-600 font-bold">
                                Cambodian Students' Association in Japan
                            </h1>

                            <p className="font-sans text-justify text-lg">
                            Cambodian Students’ Association in Japan (CSAJ) represents on behalf of the Cambodian students studying in all main regions of Japan, including Kanto, Kansai, Nagoya, Hiroshima, and Kyushu. 
                            We aim to build a community of collective support, exchanges of ideas, knowledge and friendship among the Cambodian students in Japan for the social prosperity in general. 
                            </p>

                            <div className="flex md:flex-row flex-col mt-7 md:w-auto w-full md:space-y-0 space-y-5 md:space-x-2">
                                <a href="/about" className="px-6 py-3 text-lg bg-blue-600 text-center text-black-400 rounded font-bold text-white">Learn More About Us</a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 mx-auto">
                            <img src="https://cdn.devdojo.com/images/march2022/hero-01.png" className="" />
                        </div>

                    </div>
                </section>
            </>

            <>
                <section className="bg-white py-16">
                    <div className="px-10 mx-auto max-w-7xl">
                        <div className="text-center">
                            <h1 className="mb-3 text-5xl font-bold leading-tight text-center md:text-5xl font-sans text-blue-600 py-12">Our Activities</h1>
                        </div>

                        <div className="grid grid-cols-12 gap-8 py-8">
                            {allPostsData.map((post) => (
                                <Posthighlight post={{ id: post.id, date: post.date, title: post.title, abstract: post.abstract, image: post.image }} />
                            ))}
                        </div>
                        <p className="text-2xl font-sansmb-7 text-right py-0 text-blue-600"><a href="/news">See more</a></p>
                    </div>
                </section>
            </>

            <>
                <div className="flex item-center justify-center px-16">
                    <div className="hidden grid-cols-3 gap-32 sm:grid">
                        <div className="col-span-1 text-center lg:text-left">
                            <h4 className="text-7xl font-bold tracking-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">22</h4>
                            <p className="text-sm font-semibold text-gray-400">Prefectures</p>
                        </div>
                        <div className="col-span-1 text-center lg:text-left">
                            <h4 className="text-7xl font-bold tracking-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">147</h4>
                            <p className="text-sm font-semibold text-gray-400">Students</p>
                        </div>
                        <div className="col-span-1 text-center lg:text-left">
                            <h4 className="text-7xl font-bold tracking-tight text-transparent lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">729</h4>
                            <p className="text-sm font-semibold text-gray-400">Alumni</p>
                        </div>
                    </div>
                </div>
            </>

            <>
                <section className="w-full py-12 lg:py-12 bg-white">
                    <div className="container px-8 mx-auto sm:px-12 lg:px-20">
                        <h1 className="mb-3 text-3xl font-bold leading-tight text-center md:text-5xl font-sans text-blue-600">Our Partners</h1>
                        <div className="grid grid-flow-col auto-col-max gap-16 py-16 mb-0 text-center lg:grid-flow-col lg:auto-col-max">
                            <div className="flex items-center justify-center">
                                <img src="/images/partners/kh-embassy.jpeg" alt="Embassy Logo" className="block object-contain h-56 lg:h-56" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/partners/cambodiafestival.jpg" alt="Cambodian Festival Logo" className="block object-contain h-56 lg:h-56" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/partners/enjin.png" alt="Enjin Logo" className="block object-contain h-56 lg:h-56" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/partners/globalcareer.jpeg" alt="Global Career Logo" className="block object-contain h-56 lg:h-56" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/partners/lvs.png" alt="LVS Logo" className="block object-contain h-56 lg:h-56" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/partners/sbi.png" alt="SBI Logo" className="block object-contain h-56 lg:h-56" />
                            </div>
                        </div>
                        <h1 className="mb-3 text-3xl font-bold leading-tight text-center md:text-5xl font-sans text-blue-600">Support Us</h1>
                        <div className='py-6'>
                            <p className="font-sans text-justify text-lg">
                                The Cambodian Students’ Association of Japan (CSAJ) is an association composed entirely of Cambodians pursuing academia in Japan.
                                As we are a nonprofit organization, we require sponsorships and donations to operate our programs and execute our activities and welcome any form of monetary support. 
                                Your patronage will enable us to perform our roles diligently and maintain good communication with Cambodian students and foreign correspondents in order to successfully carry out our missions. 
                                Your invaluable help will allow CSAJ to provide comfort and shelter to Cambodian students in Japan as well as to strengthen the relationship between Cambodian and Japanese and other foreign communities, providing solidarity to Cambodian students and people of the next generation.
                            </p>
                        </div>
                        <h2 className="mb-3 text-xl font-bold leading-tight text-center md:text-3xl font-sans text-blue-600">Available Resources</h2>
                        <div className='py-6 font-sans text-justify text-lg'>
                            <p>
                                Feature your logos and links on our website, social media platforms, as well as posters and mailing lists. Join us in major events such as charity events, job hunting seminars, educational seminars, graduation parties, Khmer New Year parties, and year end parties. Reach out to international communities in Japan through the favorable word-of-mouth of Cambodian students about your goods and services. Broaden your scope to communities abroad through our members and alumni. 
                                Our tools include: 
                                </p> 
                            <ul class="list-inside list-decimal">
                                <li> <b>Newsletter</b>: 440 subscription with average readership of 200 readers as of January 2023. </li> 
                                <li> <b>Social network</b>: 17,401 Facebook followers, 3,025 Facebook group members and 50 Telegram channel subscribers as of March 2023. </li>
                                <li> <b>Students community</b>: access to large and vibrant communities of Cambodian students in Kanto, Kansai, and Kyushu regions as well as Hiroshima and Nagoya prefectures.  </li>
                                <li> <b>Students alumni</b>: connect with a robust community of Cambodian alumni who are active and diligent professionals, academics, and officers inside and outside Japan.  </li>
                            
                            </ul>
                        </div>     

                        <div className='py-6 font-sans text-justify text-lg'>
                            <p>
                                For information on available sponsorship packages, <a class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline" href="mailto:csaj.info@gmail.com">please contact us!</a>
                            </p> 
                        </div>      
       
                    </div>
                </section>
            </>

        </Layout>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData().slice(0, 6)
    return {
        props: {
            allPostsData
        }
    } 
}
