export default function About() {
    function openTab(ID, id) {
        document.getElementById('Skills').style.display = 'none';
        document.getElementById('1').style.color = 'white';

        document.getElementById('Experience').style.display = 'none';
        document.getElementById('2').style.color = 'white'; 

        document.getElementById('Education').style.display = 'none';
        document.getElementById('3').style.color = 'white'; 

        var element1 = document.getElementById(ID);
        var element2 = document.getElementById(id);
        element2.style.display = 'block';
        element1.style.color = '#d31c56'; 
    }
    return (
        <section id="about" className="py-16 px-5">
            <div className="container mx-auto max-w-6xl">
                <div className="flex gap-10">
                    <div className="">
                        <img src="c.JPG" alt="" className="max-w-80 rounded" />
                    </div>
                    <div className="flex-2">
                        <h1 className="text-4xl text-white mb-5">About Me</h1>
                        <p className="leading-7 text-gray-600">
                            My name is Danish Hussain Dar. I am currently pursuing BTech in Computer Science from National Institute of Technology Patna. I love coding. I am passionate about learning new things, meeting new people, and exploring new experiences. I am enthusiastic about every new problem I come across. Always up for creating a positive environment. I am always open to learning new technologies and new skills. Flexible and willing to work in a growth-oriented environment.
                        </p>
                        <div className="flex gap-5 mt-5 text-white">
                            <p id="1" className="cursor-pointer font-bold text-[#d31c56]" onClick={() => openTab(1,'Skills')}>Skills</p>
                            <p  id="2" className="cursor-pointer font-bold" onClick={() => openTab(2,'Experience')}>Experience</p>
                            <p  id="3" className="cursor-pointer font-bold" onClick={() => openTab(3,'Education')}>Education</p>
                        </div>
                        <div className="mt-5 text-white" id="Skills">
                            <ul className="list-none p-0 txt">
                                <li><span className="font-bold">Web Development</span>
                                    <ul>
                                        <li>HTLM, CSS, JavaScript</li>
                                        <li>React, Nodejs, Express, MySql, MongoDB</li>
                                    </ul>
                                </li>
                                <br></br>
                                <li><span className="font-bold">Languages</span><br />C, C++, Java, JavaScript</li>
                            </ul>
                        </div>
                        <div className="hidden mt-5 text-white" id="Experience">
                            <ul className="list-none p-0">
                            <li><span className="font-bold">Intern @ Innovate</span>
                                    <ul>
                                        <li>Worked as a full stack web Intern.</li>
                                        <li>Technology: React, Nodejs, Express, MongoDB, Git, GitHub</li>
                                    </ul>
                            </li>
                            <li><span className="font-bold">Web Team Member @ Nit Patna</span>
                                    <ul>
                                        <li>Contribution of open Source of official Nit Patna Website.</li>
                                        <li>Technology: React, Gatsby, Rest API</li>
                                    </ul>
                            </li>
                            </ul>
                        </div>
                        <div className="hidden mt-5 text-white" id="Education">
                            <ul className="list-none p-0">
                                <li><span className="font-bold">10th</span><br />From KV Bandipur and Got 9.8CGPA</li>
                                <li><span className="font-bold">12th</span><br />From KV Bandipur and Got 92.2%</li>
                                <li><span className="font-bold">BTech</span><br />Currently in Final year of BTech in CSE from NIT Patna</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}