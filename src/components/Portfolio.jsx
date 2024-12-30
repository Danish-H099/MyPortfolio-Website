export default function Portfolio() {
    return (
        <section id="portfolio" className="bg-black py-16 px-5">
        <h1 className="text-4xl text-white mb-5">My Projects</h1>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="card bg-white p-5 rounded-lg shadow-lg">
                    <img src="1.png" alt="Project 1" className="rounded-t-lg w-80" />
                    <h3 className="text-xl font-semibold mt-4">CelebrateMate</h3>
                    <p className="mt-2">A Web App to remember Important Dates.</p>
                    <p className="text-blue underline"><a href="https://github.com/Danish-H099/CelebrateMate">Github</a></p>
                    <p className="text-blue underline"><a href="https://celebrate-mate.vercel.app/">Demo</a></p>
                </div>
                <div className="card bg-white p-5 rounded-lg shadow-lg">
                    <img src="2.png" alt="Project 1" className="rounded-t-lg w-80" />
                    <h3 className="text-xl font-semibold mt-4">MegaBlog-Appwrite</h3>
                    <p className="mt-2">A bloging Web App.</p>
                    <p className="text-blue underline"><a href="https://github.com/Danish-H099/MegaBlog-Appwrite">Github</a></p>
                    <p className="text-blue underline"><a href="https://mega-blog-appwrite-theta.vercel.app/">Demo</a></p>
                </div>
                
            </div>
        </section>
    );
}