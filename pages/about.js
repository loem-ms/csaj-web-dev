import Layout from "../components/layout";
import Member from "../components/member";
import Member1 from "../components/member1";

import FeatureText from "../components/feature";


export const MISSION = {
    'title': "Mission",
    'abstract': "Bridging Cambodian and Japanese Communities",
    'detail': "Our mission is to create a safe and welcoming environment where Cambodian students can thrive academically, socially, and culturally, while also promoting cross-cultural exchange between Cambodia and Japan. We strive to empower our members by providing opportunities for personal and professional growth, and by promoting leadership and community involvement. At the same time, we are committed to advocating for the rights and interests of Cambodian students and promoting social justice and equality."
}

export const VISION = {
    'title': "Vision",
    'abstract': "Empowering Cambodian Students as Future Leaders",
    'detail': "Our vision is to empower Cambodian students studying in Japan to become leaders in their respective fields, and to promote mutual understanding and respect between Cambodian and Japanese cultures. We envision a future where Cambodian students are equipped with the knowledge, skills, and resources to contribute to the development of their communities and society as a whole. We believe that our members have the potential to become agents of change, and we are committed to providing them with the tools they need to achieve their goals."
}

export const VALUE = {
    'title': "Values",
    'abstract': "Inclusiveness, Empowerment, and Collaboration: Guiding Values of CSAJ",
    'detail': "We value inclusiveness and diversity, and strive to create a welcoming and supportive community for all Cambodian students studying in Japan. We believe in empowering our members with the knowledge, skills, and resources they need to succeed academically and professionally, and to make a positive impact in their communities. We promote cross-cultural exchange and understanding between Cambodia and Japan, and celebrate the unique cultural heritage of our members. We are committed to advocating for the rights and interests of Cambodian students studying in Japan, and promoting social justice and equality. We value collaboration and partnerships, both within our organization and with other student associations and organizations, to achieve our shared goals and objectives."
}

export default function About() {
    return (
        <Layout title="CSAJ-About Us">
            <h1 className="font-sans py-12 text-6xl md:text-6xl lg:text-6xl font-extrabold mb-6 relative text-center text-blue-600">
                Cambodian Students' Association in Japan
            </h1>

            <>
                <section className="text-justify font-sans w-full px-8 py-8 md:py-8 xl:px-0 tails-selected-element bg-rose-200 text-white ">
                    <FeatureText info={MISSION} />
                    <FeatureText info={VISION} />
                    <FeatureText info={VALUE} />
                </section>
            </>

            <section className="">
                <div className="flex max-w-7xl lg:flex-row space-x-24 relative mx-auto py-4 lg:py-4 px-16 lg:px-16 text-xl">
                    <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl relative flex items-start justify-center flex-col">
                        <p className="font-sans text-justify text-lg">
                            The Cambodia Students' Association in Japan (CSAJ)
                            is a non-profit organization that brings together Cambodian students studying in Japan.
                            Founded in XXXX, CSAJ has grown to become a vibrant community of students from all over Cambodia who are pursuing higher education in Japan.
                        </p>
                        <br />
                        <p className="font-sans text-justify text-lg">
                            One of CSAJ's main goals is to provide a supportive network for Cambodian students as they navigate their studies in Japan. The organization offers assistance in a variety of areas, including academic and career advising, language classes, and mental health support. With a dedicated team of volunteer students and staff, CSAJ is committed to helping Cambodian students achieve their full potential in Japan.
                        </p>
                    </div>

                    <div className="lg:w-1/2 mx-auto">
                        <img src="https://cdn.devdojo.com/images/march2022/hero-01.png" className="" />
                    </div>

                </div>
            </section>

            <section className="">
                <div className="flex max-w-7xl lg:flex-row space-x-24 relative mx-auto py-4 lg:py-4 px-16 lg:px-16">
                    <div className="lg:w-1/2 mx-auto">
                        <img src="https://cdn.devdojo.com/images/march2022/hero-01.png" className="" />
                    </div>
                    <div className="lg:w-1/2 w-full lg:max-w-none max-w-2xl relative flex items-start justify-center flex-col">
                        <p className="font-sans text-justify text-lg">
                            CSAJ provides support to its members through various programs and events aimed at promoting the well-being and success of Cambodian students in Japan. This includes academic and career counseling, language classes, cultural activities, and social events that allow students to connect with one another and build a sense of community.
                        </p>
                        <br />
                        <p className="font-sans text-justify text-lg">
                            In addition to supporting its members, CSAJ also plays an important role in promoting the rich cultural heritage of Cambodia in Japan. Through cultural events, exhibitions, and performances, the organization helps to introduce the unique cultural traditions of Cambodia to the Japanese public and foster greater understanding and appreciation between the two countries.
                        </p>
                    </div>
                </div>
            </section>   
        </Layout>
    );
}