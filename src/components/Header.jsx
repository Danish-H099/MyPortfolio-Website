import React from 'react';

function Header() {
    // closeMenu = () => {
    //     console.log('close menu');
    // }
    // openMenu = () => {
    //     console.log('open menu');
    // }
    return (
        <header id="header" className="w-full h-screen bg-[url('a.png')] bg-cover bg-center ">
            <div className="container  px-5 text-white-800">
                <nav className=" w-full py-6 text-white text-xl flex justify-between items-center  top-0 transition-all bg-black"  >
                    <a href="#header" className='hover:text-[#d31c56] h-20'><img src="b.png" className="logo mx-20" alt="Error in loading" /></a>
                    
                    <ul id="sidemenu" className='flex items-center space-x-10 mx-40'>
                        <li><a href="#header" className='hover:text-[#d31c56]'>Home</a></li>
                        <li><a href="#about" className='hover:text-[#d31c56]'>About</a></li>
                        <li><a href="#portfolio" className='hover:text-[#d31c56]'>Portfolio</a></li>
                        <li><a href="#contact" className='hover:text-[#d31c56]'>Contact</a></li>
                        {/* <i className="fa-solid fa-xmark" onClick={closeMenu} style={{ cursor: 'pointer' }}></i> */}
                    </ul>
                    {/* <i className="fa-solid fa-bars" onClick={openMenu} style={{ cursor: 'pointer' }}></i> */}
                </nav>
                <div className="header-text mt-[20%] text-4xl text-white mx-20">
                    <p className='text-4xl'>Web Developer</p>
                    <h1 className='mt-5 text-6xl bold'>Hi, I am <span className='text-[#d31c56]'>Danish</span> Hussain</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;

