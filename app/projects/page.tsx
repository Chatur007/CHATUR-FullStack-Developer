"use client"
import React, {useState} from "react";
import Link from "next/link";



    const slideImage = [
         "images/projects_images/Project1.png",
         "images/projects_images/Project2.png",
         "images/projects_images/Project3.png",
         "images/projects_images/Project4.png",
         "images/projects_images/Project5.png",
         "images/projects_images/Project6.png",
         "images/projects_images/Project7.png",
         "images/projects_images/Project8.png"
    ];

    const slideInfo = [
        {
            title: "Infiinofy",
            description: "Designed and developed the official Infiinofy corporate website with a focus on modern UI/UX and clean visual design. Built a fully responsive layout to ensure seamless experience across devices, with structured sections to showcase services, brand identity, and business information. Focused on performance, usability, and intuitive navigation.",
            link: "https://www.infiinofy.com"
        },
        {
            title: "Vespera Perfumes",
            description: "Designed and developed a modern perfume e-commerce website showcasing Vespera fragrance products. Built a clean and visually appealing UI with structured product sections, smooth navigation, and responsive design for all devices. Focused on creating a premium brand feel while enabling users to explore products and engage easily through the platform.",
            link: "https://vespera-perfumes-dun.vercel.app/"
        },
        {
            title: "Interactive 3D PC Website Experience",
            description: "Created a futuristic PC configurator website featuring a 3D product showcase with smooth animations, interactive product configuration, and a visually immersive user experience. Implemented a responsive layout with modern design aesthetics, enhanced user engagement through dynamic UI elements, and optimized performance for smooth interactions across devices.",
            link: "https://pc-3d-website.vercel.app"
        },
        {
            title: "Imagingpedia - AI-Powered Radiology Learning Platform",
            description: "Designed and developed a full-stack radiology learning platform with backend and database integration. Implemented structured modules including exam tracks, question banks, and image-based assessments. Built APIs and database systems to manage users, questions, and submissions, along with an AI-based evaluation feature that compares user answers with model answers and provides feedback. Focused on responsive UI/UX and seamless data flow between frontend and backend ",
            link: "https://imagingpedia-website.vercel.app/"
        },
        {
            title: "Swamiraj Media - Digital Marketing & Campaign Website",
            description: "Designed and developed a professional website for Swamiraj Media to showcase digital marketing and political campaign services. Built structured sections to present services, brand messaging, and client-focused content. Focused on clean UI/UX, responsive design, and clear content flow to effectively communicate strategies and services to users",
            link: "https://www.swamirajmedia.com"
        },
        {
            title: "Petrol Pump Management System - Zoho Creator Application",
            description: "Designed and developed a Petrol Pump Management System using Zoho Creator to streamline daily operations. Built modules for fuel stock management, sales tracking, and transaction records with automated workflows and reporting. Focused on improving operational efficiency, data organization, and real-time monitoring through a centralized application.",
            link: "https://www.zoho.com/en-in/creator/"
        },
        {
            title: "Jewellery Store Management System - Zoho Creator Application",
            description: "Designed and developed a Jewellery Store Management System using Zoho Creator to manage inventory, sales, and customer records. Built modules for product tracking, billing, and transaction management with automated workflows and reporting. Focused on improving data organization, operational efficiency, and real-time business monitoring through a centralized application.",
            link: "https://www.zoho.com/en-in/creator/"
        },
        {
            title: "Modern Digital Marketing Website",
            description: "Developed a modern digital marketing website with a strong focus on UI/UX and smooth user interactions. Implemented advanced animations using GSAP and ScrollTrigger to create engaging scroll-based effects and dynamic transitions. Built a fully responsive layout optimized for different screen sizes, ensuring consistent performance and seamless navigation across devices.",
            link: "https://digital-marketing-website-using-gsa.vercel.app"
        }
    ];


export default function Projects() {
    const [currentSlide , setCurrentSlide] = useState(0);
    const [isAnimating,setIsAnimating] = useState(false);
    const size = 70;
    const getSlideTransform = (position:number) => {
    const radius = size / 2;
    const angle = position * 47 + 141;
    const scale = position === 0 ? 5 : (position === -1 || position === 1 ? 3 : 1);
    return `rotate(${angle}deg) translateY(${radius}rem) rotate(${-angle}deg) scale(${scale})`;
  };

  const handleMove = (direction: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    

    const nextSlide = (currentSlide + direction + slideImage.length) % slideImage.length;
    setCurrentSlide(nextSlide);


    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };



    return (
        <main className="slideshow-container">
        <div id="nav-bar">
        <h1 className="cursor-pointer" onClick={()=> window.open("/","_self")}>C.</h1>
        
        <button onClick={() => window.open("https://github.com/Chatur007", "_blank")}>
          <i className="fa-brands fa-github fa-2xl"></i>
        </button>
        <button onClick={() => window.open("https://www.linkedin.com/in/chaturshankar/", "_blank")}>
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </button>
        <button>
        <Link href="/projects">
          <i className="fa-solid fa-diagram-project fa-2xl"></i>
        </Link>
        </button>
        
        {/* <button>
          <Link href="/contact">
          <i className="fa-solid fa-envelope fa-2xl"></i>
          </Link>
        </button> */}
        <button onClick={()=>window.open("https://wa.me/919019966259?text=Hi%20I%20went%20through%20your%20portfolio%20and%20I%20am%20interested%20in%20having%20a%20discussion%20with%20you.","_blank")}>
          <i className="fa-brands fa-whatsapp fa-2xl"></i>
        </button>
      </div>
            <div 
              key={`bg-${currentSlide}`} 
              className="bg-layer" 
              style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${slideImage[currentSlide]})`}} 
            />
            <div className="info-panel">
                <div key={`info-${currentSlide}`} className="fade-in-content">
                  <h1 className="info-title">{slideInfo[currentSlide].title}</h1>
                  <p className ="info-text">{slideInfo[currentSlide].description}</p>
                  <button className = "cat-btn" onClick={() => window.open(slideInfo[currentSlide].link, "_blank")}>
                      View Project <i className="fa-solid fa-angle-right fa-fade"></i>
                  </button>
                </div>
            </div>
            <div className="carousal-wrapper">
         <div className="carousel-wrapper">
        <div className="carousel-circle">
          {slideImage.map((img, i) => {
            let offset = (i - currentSlide + slideImage.length) % slideImage.length;
            if (offset > slideImage.length / 2) offset -= slideImage.length;
            
            const isVisible = [-2, -1, 0, 1, 2].includes(offset);

            return (
              <div
                key={i}
                className="slide-item"
                style={{
                  backgroundImage: `url(${img})`,
                  transform: isVisible ? getSlideTransform(offset) : 'scale(0)',
                  opacity: isVisible ? 1 : 0,
                  visibility: isVisible ? 'visible' : 'hidden'
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
    <div className="arrow-controls">
        <button className="arrow" onClick={() => handleMove(-1)} aria-label="Anterior"><i className="fa-solid fa-angle-left"></i></button>
        <button className="arrow" onClick={() => handleMove(1)} aria-label="Siguiente"><i className="fa-solid fa-angle-right"></i></button>
        <button className="arrow" onClick={() => window.open("/","_self")} aria-label="Home"><i className="fa-solid fa-house-chimney"></i></button>
      </div>
            <style jsx global>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        html { font-size:62.5%; }
        body { 
          background-color:#fff;
          font-family: Arial, sans-serif;
          color: #fff;
          overflow: hidden;
        }
        .slideshow-container {
          width:100vw;
          height:100vh;
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          position:relative;
          overflow: hidden;
          padding: 8rem 4rem;
          background-color: #000;
        }
        .bg-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 1;
          animation: fadeBg 0.8s ease forwards;
        }
        @keyframes fadeBg {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }
        .fade-in-content {
          animation: textFadeIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        @keyframes textFadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .info-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 4rem;
          max-width: 35%;
          z-index: 5;
        }
        .info-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .info-text {
          font-size: 1.6rem;
          line-height: 1.5;
          color: #fff;
        }
        .cat-btn {
          margin-top: 3rem;
          padding: 1.2rem 3rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 30px;
          color: #fff;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: inline-block;
          width: fit-content;
        }
        .cat-btn:hover {
          background: #fff;
          color: #000;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        .cat-btn a {
          color: inherit;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .carousel-wrapper {
          position: absolute;
          top: 50%;  
          left: 50%; 
          transform: translate(25%, -7%);
          z-index: 5;
        }
        .carousel-circle {
          position: relative;
          width: 70rem;
          height: 70rem;
          border: 1px dashed #eebe97;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slide-item {
          position: absolute;
          border-radius: 50%;
          outline: 0.2px solid #fff;
          width: 6rem;
          height: 6rem;
          background-size: cover;
          background-position: center;
          transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s;
        }
        .arrow-controls {
          position: absolute;
          right: 12rem;       
          top: 90%;           
          transform: translateY(-50%);
          display: flex;
          flex-direction: row; 
          gap: 2rem;
          z-index: 10;
        }
        .arrow {
          font-size: 3rem;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
          color: #000;
        }
        .arrow:hover {
          background: rgba(255, 255, 255, 1);
        }
      `}</style>

        </main>
    );
}