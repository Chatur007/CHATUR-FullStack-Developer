"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
export default function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 1,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const canvas = document.querySelector("canvas");
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return () => {
        cancelAnimationFrame(rafId);
      };
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    const files = (index: number) => {
      const frameNumber = String(index + 1).padStart(4, "0");
      return `/Animation images/male${frameNumber}.png`;
    };

    const frameCount = 300;
    const images: HTMLImageElement[] = [];
    const imageSeq = { frame: 1 };

    for (let i = 0; i < frameCount; i += 1) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    const scaleImage = (img: HTMLImageElement, ctx: CanvasRenderingContext2D) => {
      if (!img?.width || !img?.height) return;
      const canvasRef = ctx.canvas;
      const hRatio = canvasRef.width / img.width;
      const vRatio = canvasRef.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShiftX = (canvasRef.width - img.width * ratio) / 2;
      const centerShiftY = (canvasRef.height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );
    };

    const render = () => {
      scaleImage(images[imageSeq.frame], context);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    images[1].onload = render;

    const ctx = gsap.context(() => {
      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          scrub: 1,
          trigger: "#page>canvas",
          start: "top top",
          end: "600% top",
          anticipatePin: 1,
        },
        onUpdate: render,
      });

      ScrollTrigger.create({
        trigger: "#page>canvas",
        pin: true,
        start: "top top",
        end: "600% top",
      });

      gsap.to("#page1", {
        scrollTrigger: {
          trigger: "#page1",
          start: "top top",
          end: "bottom top",
          pin: true,
        },
      });

      gsap.to("#page2", {
        scrollTrigger: {
          trigger: "#page2",
          start: "top top",
          end: "bottom top",
          pin: true,
        },
      });

      gsap.to("#page3", {
        scrollTrigger: {
          trigger: "#page3",
          start: "top top",
          end: "bottom top",
          pin: true,
        },
      });

      gsap.from("#skills-visual", {
        opacity: 0,
        scale: 0.7,
        duration: 1,
        scrollTrigger: {
          trigger: "#page2",
          start: "top 60%",
        },
      });

      gsap.to(".orbit", {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "linear",
        transformOrigin: "50% 50%",
      });

      gsap.to("#skills-visual img", {
        rotate: -360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });

      gsap.from(".skill", {
        opacity: 0,
        scale: 0.85,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#page2",
          start: "top 60%",
        },
      });
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);
  var date = new Date()
  var month = date.getMonth();
  var year = date.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthInChar = months[month]
  return (
    <>
      <div id="nav">
        <h3>
          <b>CHATUR</b>
        </h3>
        <button>{monthInChar} , {year}</button>
      </div>

      <div id="nav-bar">
        <h1 className="cursor-pointer" onClick={()=> window.open("/","_self")}>C.</h1>
        <button onClick={() => window.open("https://github.com/Chatur007", "_blank")}>
          <i className="fa-brands fa-github fa-xl"></i>
        </button>
        <button onClick={() => window.open("https://www.linkedin.com/in/chaturshankar/", "_blank")}>
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </button>
        <button>
        <Link href="/projects">
          <i className="fa-solid fa-diagram-project fa-xl"></i>
        </Link>
        </button>
        
        {/* <button>
          <Link href="/contact">
          <i className="fa-solid fa-envelope fa-xl"></i>
          </Link>
        </button> */}
        <button onClick={()=>window.open("https://wa.me/919019966259?text=Hi%20I%20went%20through%20your%20portfolio%20and%20I%20am%20interested%20in%20having%20a%20discussion%20with%20you.","_blank")}>
          <i className="fa-brands fa-whatsapp fa-2xl"></i>
        </button>
      </div>

      <div id="main">
        <div id="page">
          <div id="loop">
            <h1>
              My Name Is <b><i>Chatur</i></b> And I Am A FullStack <b><i>Developer. </i></b>
            </h1>
            <h1>
              My Name Is <b><i>Chatur</i></b> And I Am A FullStack <b><i>Developer. </i></b>
            </h1>
            <h1>
              My Name Is <b><i>Chatur</i></b> And I Am A FullStack <b><i>Developer. </i></b>
            </h1>
          </div>
          <h3 className="text-2xl">
            I enjoy turning ideas into intuitive designs and functional web solutions.
            <br /> With a strong foundation in programming and design tools,
            <br /> I&apos;m constantly learning and growing to create
            <br /> impactful products.
          </h3>
          <h4>...Scroll To Know Me More</h4>
          <canvas></canvas>
        </div>

        <div id="page1">
          <div id="right-text">
            <h3 className="text-xl">Presidency University</h3>
            <h1>
              M.Tech <br /> Artificial Intelligence <br /> and Machine learning
              <br /> 2024-2026
            </h1>
          </div>
          <div id="left-text">
            <h1>
              B.Tech <br />Information Science <br /> 2020-2024
            </h1>
            <h3 className="text-xl">Presidency University</h3>
          </div>
        </div>

        <div id="page2">
          <div id="text1">
            <h3 className="text-xl">Technologies I Know</h3>
            <h1>
              Crafting Digital <br />Experiences
              <br />with Modern Technologies
            </h1>
          </div>

          <div id="skills-visual">
            <div className="orbit">
              <div className="logo1">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="skill html" data-skill="HTML" alt="HTML5" />
              </div>
              <div className="logo2">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="skill js" data-skill="JavaScript" alt="JavaScript" />
              </div>
              <div className="logo3">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="skill node" data-skill="Node.js" alt="Node.js" />
              </div>
              <div className="logo4">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="skill db" data-skill="PostgreSQL" alt="PostgreSQL" />
              </div>
              <div className="logo5">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="skill three" data-skill="React" alt="React" />
              </div>
              <div className="logo6">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="skill zoho" data-skill="Git" alt="Git" />
              </div>
              <div className="logo7">
                <img src="/images/zoho.png" className="skill zoho" data-skill="Zoho" alt="Zoho" />
              </div>
            </div>
            <div id="skill-info"></div>
          </div>
        </div>

        <div id="page3">
          <div id="text2">
            <h3 className="text-xl">Beyond Coding</h3>
            <h1>
              Things I Enjoy <br />
              Outside Development
            </h1>
          </div>
          <div id="text3">
            <p>
              Outside of programming, I enjoy exploring new technologies and
              <br />
              experimenting with creative ideas. I spend time playing story-driven
              <br />
              video games, listening to music while coding, and constantly learning
              <br />
              about advancements in artificial intelligence and cloud computing.
              <br />
              I also enjoy building small experimental projects that allow me to
              <br />
              explore new frameworks, tools, and concepts. These activities keep me
              <br />
              inspired and help me stay creative in my development journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}