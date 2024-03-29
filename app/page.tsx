"use client";

import HomepageProjectContainer from "./components/HomepageProjectContainer";
import HomepageProjectSpotlightContainer from "./components/HomepageProjectSpotlightContainer";
import HomepageServiceContainer from "./components/HomepageServiceContainer";
import Button from "./components/common/Button";
import { motion } from "framer-motion";
import Carousel, { CarouselItem } from "./components/common/Carousel";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { HiExternalLink, HiHeart, HiLocationMarker } from "react-icons/hi";

const testimonials = [
  {
    avatarUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/profile/photo/b38462267a6eca9cbd8c0f58458ef62a-1611224678545/ed114947-a960-46f3-93c0-36cf324a8a39.jpg",
    name: "Kira Wolfe",
    position: "Easy EPC, Client from Fiverr",
    description: "Jabobernardo is super friendly and easy to work with, very quick at making the pages and doing any revisions. I would recommend to anyone and will be returning for more pages myself! Thank you :)",
    url: "https://www.fiverr.com/jabobernardo?up_rollout=true"
  },
  {
    avatarUrl: "https://dw3i9sxi97owk.cloudfront.net/uploads/thumbs/f6383a50d638d95a5e2ae0b5cdaca352_150x150.jpg",
    name: "Sumit K.",
    position: "Client from PeoplePerHour",
    description: "Great work and completed on time! Highly recommended!",
    url: "https://www.peopleperhour.com/freelancer/technology-programming/joel_vincent-bernardo-full-stack-web-developer-xnxyanw#reviews"
  },
  {
    avatarUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/profile/photo/b38462267a6eca9cbd8c0f58458ef62a-1611224678545/ed114947-a960-46f3-93c0-36cf324a8a39.jpg",
    name: "Kira Wolfe",
    position: "Easy EPC, Client from Fiverr",
    description: "Jabobernardo is amazing and I would recommend to anyone, super fast and great at what he does. Thanks so much :)",
    url: "https://www.fiverr.com/jabobernardo?up_rollout=true"
  },
]

const projects = [
  {
    "name": "UP-TO-DATE Web Design",
    "tags": ["Web Development"],
    "avatarUrl": "https://hellojabo.com/images/utd-logo.jpg",
    "position": "(Remote) Full-stack Web Developer",
    "duration": "May - Jul 2023",
    "location": "Belgium",
    "shortDescription": "A task, project, and user management system for a web design agency.",
    "description": "- Architected and developed full-stack web applications, including project management, task management, and user management systems, ensuring seamless integration and scalability.\n- Collaborated with stakeholders to gather requirements, translate them into functional specifications, and designed intuitive user interfaces for effective project, task, and user management.\n- Developed secure and scalable back-end functionalities, encompassing data storage, retrieval, and manipulation, while ensuring seamless integration and interoperability between system components.\n- Conducted thorough testing, debugging, and continuous monitoring to identify and resolve software defects, performance issues, and security vulnerabilities.\n- Collaborated effectively with cross-functional teams, incorporating the latest technologies and industry trends to deliver high-quality web applications that meet project goals and user needs."
  },
  {
    "name": "Array Agency",
    "tags": ["Web Development"],
    "avatarUrl": "https://hellojabo.com/images/array-logo.jpg",
    "position": "(Remote) Full-stack Web Developer",
    "duration": "Sep - Oct 2023",
    "location": "Los Angeles",
    "shortDescription": "An audit tool for a food and restaurant agency.",
    "description": "- Collaborated with clients to develop a cutting-edge audit tool aimed at reconciling cash drawer amounts with Square API data.\n- Created a secure, user-friendly platform with role-based access control for employees (Owner, Manager, Team Lead) to ensure the right personnel handle sensitive financial data.\n- Designed and implemented a seamless login process, enabling Team Leads to initiate the audit by entering cash counts of various denominations.\n- Developed algorithms to calculate and compare the total cash amount with Square data, automating the verification process for accuracy.\n- Engineered a notification system to alert users in case of discrepancies, prompting them to recheck and confirm mismatches.\n- Translated clients' Google Sheets templates into a functional software application, aligning it with their specific needs and requirements.\n- Maintained open communication with the client throughout the project, ensuring a collaborative and successful development process."
  },
  {
    "name": "Easy EPC",
    "tags": ["Web Development"],
    "avatarUrl": "https://hellojabo.com/images/easy-epc-logo.jpg",
    "position": "(Remote) Front-end Web Developer",
    "duration": "Feb - Apr 2021",
    "location": "United Kingdom",
    "shortDescription": "A business website for a company that provides Energy Performance Certificates (EPCs).",
    "description": "- Developed and implemented more than 13 pages for the business, showcasing expertise in designing and coding PHP, HTML, CSS, and JavaScript elements for a seamless user experience.\n- Transformed multiple PDF files into accessible and user-friendly formats by converting them to PHP, HTML, JavaScript, and CSS, enhancing their usability and functionality.\n- Optimized hero images for improved performance, employing techniques to reduce file size and enhance loading speed, resulting in a fast and smooth website experience for all users."
  },
  {
    "name": "Ano.js",
    "tags": ["Web Development"],
    "avatarUrl": "https://hellojabo.com/images/ano-js-log.jpg",
    "position": "(Remote) Open Source Developer",
    "duration": "Mar 2020 - Jun 2022",
    "location": "Internet",
    "shortDescription": "A tool for developers to integrate animations into their websites and applications.",
    "description": "- Developed captivating modern web animations, which garnered significant attention and were utilized by a substantial user base of over 17,000 individuals, enhancing the overall visual appeal and interactivity of their website/application.\n- Recognized for my outstanding contributions to the project, I was bestowed with the esteemed title of \"Top Contributor\" as a result of my active involvement and impactful contributions to its success."
  }
]

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <>
      <header className="homepage__header">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.15,
          }}
          className="homepage-topbar__container"
        >
          <div className="title__container">
            <h1><span>@</span>hellojabo</h1>
          </div>
          <div className="navigation__container">
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>
          <motion.div
            whileInView={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 5, -5, 5, 0],
            }}
            transition={{
              delay: 0.5,
            }}
            className="cta__container"
          >
            <a href="#contact">
              <Button rIcon="./icons/send.svg">Let's Talk</Button>
            </a>
          </motion.div>
        </motion.div>
        <div className="homepage-hero__container">
          <motion.div
            initial={{
              opacity: 0,
              y: 250,
            }}
            whileInView={{
             opacity: [0, 1],
             y: [250, 0],
            }}
            transition={{
              delay: 0.5,
            }}
            className="homepage-hero__container--left"
          >
            <div>
              <h2>Hello, I'm <span>Jabo Bernardo</span></h2>
              <h3>Web Developer</h3>
            </div>
            <div>
              <span className="line--effect"></span>
              <p>I love turning ideas into user-friendly digital experiences. I pay attention to detail and always aim for innovation. My approach blends creativity with technical skills, ensuring success in every project</p>
            </div>
            <div>
              <motion.div
                
              >
                <a href="#contact">
                  <Button rIcon="./icons/send.svg">Let's Talk</Button>
                </a>
              </motion.div>
              <a href="#projects">
                <Button variant="text">See Projects</Button>
              </a>
            </div>
            <div>
              <ul>
                <li>
                  <a href="https://github.com/jabo-bernardo"><img src="./icons/github.svg"/></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jabo-bernardo/"><img src="./icons/linkedin.svg"/></a>
                </li>
                <li>
                  <a href="https://twitter.com/hellojabo"><img src="./icons/twitterx.svg"/></a>
                </li>
              </ul>
            </div>
          </motion.div>
          <div className="homepage-hero__container--right">

          </div>
        </div>
        <motion.div
          initial={{
            y: 350,
          }}
          animate={{
            y: [350, 0],
          }}
          transition={{
            type: "spring",
            ease: "easeInOut",
            bounce: 0.25,
            delay: 0.15,
          }}
          className="wave__container"
        >
          <img src="./icons/wave-1.svg"/>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: [0, 1],
          }}
          transition={{
            delay: 1,
          }}
          className="scroll-down-indicator__container"
        >
          <motion.div
            whileInView={{
              y: [-10, 0, -10],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <img src="./icons/arrowdown.svg"/>
          </motion.div>
          <p>Scroll Down</p>
        </motion.div>
      </header>
      <main>
        <div className="services__container" id="services">
          <motion.h4
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: [0, 1],
            }}
          >
            Here are the services that I provide
          </motion.h4>
          <motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: -130,
              }}
              whileInView={{
                opacity: [0, 1],
                x: [-130, 0],
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <HomepageServiceContainer icon="./icons/full-stack.svg" title={`Full Stack \n Web Development`} description="Perfect for complex projects."/>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: 130,
              }}
              whileInView={{
                opacity: [0, 1],
                y: [130, 0],
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <HomepageServiceContainer icon="./icons/backend.svg" title={`Back End \n Development`} description="Need an API for your website, app, or service? This is the perfect choice."/>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 130,
              }}
              whileInView={{
                opacity: [0, 1],
                x: [130, 0],
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <HomepageServiceContainer icon="./icons/front-end.svg" title={`Front End \n Web Development`} description="Have a PDF, Figma, Adobe XD, and such designs and want to bring it to life? This is the perfect choice."/>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: [0, 1],
            }}
          >
            Whether it's for internal use, client-facing applications, or robust web solutions, I specialize in delivering comprehensive Full Stack, Front End, and Backend development services tailored to meet your specific needs. If you're exploring other options or have unique requirements, feel free to reach out, and I'll be more than happy to discuss how I can assist you in achieving your goals.
          </motion.p>
        </div>
        <motion.div
        initial={{
          y: 0,
        }}
        transition={{
          type: "spring",
          ease: "easeInOut",
          bounce: 0.25,
        }}
        className="wave__container"
      >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F49A11" fill-opacity="1" d="M0,224L80,202.7C160,181,320,139,480,133.3C640,128,800,160,960,197.3C1120,235,1280,277,1360,298.7L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </motion.div>
        <div className="projects__container" id="projects">
          <motion.h4
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: [0, 1],
            }}
          >
            Latest Project
          </motion.h4>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: [0, 1],
              scale: [0, 1],
            }}
          >
            <HomepageProjectSpotlightContainer
              name="ToMyDearest.xyz"
              description="A website that allows users to share confessions, experiences, and more anonymously. This is my most successful project yet with over 6k users since launch."
              link="https://tomydearest.xyz"
              tiktokLink="https://tiktok.com/@tomydearestapp"
              youtubeLink="https://youtube.com/@tomydearestapp"
              instagramLink="https://instagram.com/tomydearestapp"
              twitterLink="https://twitter.com/tomydearestapp"
              imageUrl="./images/tmd-mock.png"
            />
          </motion.div>
          <div className="projects-list__container">
            {
              projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  whileInView={{
                    opacity: [0, 1],
                    scale: [0, 1],
                  }}
                >
                  <HomepageProjectContainer
                    name={project.name}
                    tags={project.tags}
                    avatarUrl={project.avatarUrl}
                    position={project.position}
                    duration={project.duration}
                    location={project.location}
                    shortDescription={project.shortDescription}
                    description={project.description}
                  />
                </motion.div>
              ))
            }           
          </div>
        </div>
        <div className="testimonials__container" id="testimonials">
          <motion.h4
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: [0, 1],
            }}
          >
            What My Clients Says
          </motion.h4>
          <motion.div
            className="testimonial__wrapper"
            initial={{
              opacity: 0,
              y: 100,
              rotate: 0,
              scale: 1.1,
            }}
            whileInView={{
              opacity: [0, 1],
              y: [100, 0],
              rotate: [0, 0, 0, 1, -1, 1, 0],
              scale: [1.1, 1.1, 1],
            }}
            transition={{
              delay: 0.1
            }}
          >
            <div className="testimonial-control__container">
              <button onClick={() => setCurrentTestimonial(currentTestimonial - 1)}>
                <FaArrowLeft />
              </button>
            </div>
            <Carousel currentItem={currentTestimonial} setCurrentItem={setCurrentTestimonial}>
              {
                testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="testimonial__container">
                      <div className="testimonial__container--header">
                        <img src={testimonial.avatarUrl}/>
                        <div>
                          <h5>{testimonial.name}</h5>
                          <p>{testimonial.position}</p>
                        </div>
                      </div>
                      <div className="testimonial__container--body">
                        <FaQuoteLeft />
                        <p>{testimonial.description}</p>
                        <FaQuoteRight />
                      </div>
                      <div className="testimonial__container--footer">
                        <a target="_blank" href={testimonial.url}>View Testimonial <HiExternalLink /></a>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              }
              
            </Carousel>
            <div className="testimonial-control__container">
              <button onClick={() => setCurrentTestimonial(currentTestimonial + 1)}>
                <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
        <div className="contact__container" id="contact">
          <div>
            <motion.h4
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: [0, 1],
              }}
            >
              Let's Work Together
            </motion.h4>
            <p>Have a project in mind? Let's talk about it.</p>
          </div>
          <div>
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: [0, 0, 0, 1, -1, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: "reverse",
                ease: "easeInOut",
                repeatDelay: 3,
              }}
            >
              <FaEnvelope />
              <a href="mailto:contact@hellojabo.com">
                <p>contact@hellojabo.com</p>
              </a>
            </motion.div>
            <div>
              <HiLocationMarker />
              <p>Manila, Philippines</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>
          Made with 
          <motion.span
            initial={{
              scale: 1,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
              ease: "easeInOut",
              repeatDelay: 3,
            }}
          >
            <HiHeart />
          </motion.span> 
          by Jabo Bernardo
        </p>
      </footer>
    </>
  )
}
