export default function Portfolio() {
    return (
        <section id="portfolio" style={{ padding: '60px 20px' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 className="text-4xl text-white mb-5">Work</h1>
                <div className="work-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    <div className="work" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                        <img src="work-1.png" alt="" style={{ width: '100%' }} />
                        <div className="layer" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: '0', transition: 'opacity 0.3s' }}>
                            <h3>$ App</h3>
                            <p style={{ textAlign: 'center' }}>I Haven't made any of My work public lately but soon I am going to Upload some of my work which you can Download from the given link also.</p>
                            <a href="#" style={{ color: '#fff', marginTop: '10px' }}><i className="fa-solid fa-link"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src="work-2.png" alt="" />
                        <div className="layer">
                            <h3># App</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="#"><i className="fa-solid fa-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}