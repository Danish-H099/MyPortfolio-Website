export default function About() {
    return (
        <section id="about" style={{ padding: '60px 20px' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="row" style={{ display: 'flex', gap: '40px' }}>
                    <div className="about-col-1" style={{ flex: '1' }}>
                        <img src="c.JPG" alt="" style={{ width: '100%', borderRadius: '8px' }} />
                    </div>
                    <div className="about-col-2" style={{ flex: '2' }}>
                        <h1 className="subtitle" style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>About Me</h1>
                        <p style={{ lineHeight: '1.6', color: '#666' }}>My name is Danish Hussain Dar. I am currently pursuing BTech in Computer Science from National Institute of Technology Patna. I love coding. I am passionate about learning new things, meeting new people, and exploring new experiences. I am enthusiastic about every new problem I come across. Always up for creating a positive environment. I am always open to learning new technologies and new skills. Flexible and willing to work in a growth-oriented environment.</p>
                        <div className="tab-titles" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                            <p className="tab-links active-link" onClick={() => openTab('Skills')} style={{ cursor: 'pointer', color: '#007BFF', fontWeight: 'bold' }}>Skills</p>
                            <p className="tab-links" onClick={() => openTab('Experience')} style={{ cursor: 'pointer', color: '#333', fontWeight: 'bold' }}>Experience</p>
                            <p className="tab-links" onClick={() => openTab('Education')} style={{ cursor: 'pointer', color: '#333', fontWeight: 'bold' }}>Education</p>
                        </div>
                        <div className="tab-contents active-tab" id="Skills" style={{ marginTop: '20px' }}>
                            <ul style={{ listStyle: 'none', padding: '0' }}>
                                <li><span style={{ fontWeight: 'bold' }}>Web Development</span><br />Web app Development</li>
                                <li><span style={{ fontWeight: 'bold' }}>App Development</span><br />Building Android Apps</li>
                                <li><span style={{ fontWeight: 'bold' }}>Languages</span><br />Intermediate in C and Java</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="Experience" style={{ display: 'none', marginTop: '20px' }}>
                            <ul style={{ listStyle: 'none', padding: '0' }}>
                                <li><span style={{ fontWeight: 'bold' }}>Just a learner</span><br />No Experience till Now</li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="Education" style={{ display: 'none', marginTop: '20px' }}>
                            <ul style={{ listStyle: 'none', padding: '0' }}>
                                <li><span style={{ fontWeight: 'bold' }}>10th</span><br />From KV Bandipur and Got 9.8CGPA</li>
                                <li><span style={{ fontWeight: 'bold' }}>12th</span><br />From KV Bandipur and Got 92.2%</li>
                                <li><span style={{ fontWeight: 'bold' }}>BTech</span><br />Currently in Final year of BTech in CSE from NIT Patna</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}