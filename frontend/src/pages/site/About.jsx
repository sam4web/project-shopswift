import aboutImage from "@/assets/images/about-image.jpg";
import useTitle from "@/hooks/useTitle.js";

const About = () => {
  useTitle("About Project | ShopSwift");
  return (
    <>
      <section>
        <div className="section-container">
          <div className="grid items-center gap-10 lg:gap-14 md:grid-cols-2">
            <div className="flex">
              <img className="rounded-lg shadow-2xl" src={aboutImage} alt="about-image" />
            </div>

            <div className="space-y-3 lg:space-y-5 w-full max-w-md md:max-w-lg">
              <h1 className="text-3xl lg:text-5xl dark:text-light text-dark-secondary font-extrabold mb-4">
                Project SwiftShop
              </h1>
              <div className="font-normal text-base lg:text-lg dark:text-light space-y-3">
                <p>
                  Welcome to <b>SwiftShop</b>, a modern e-commerce platform developed as a <b>practice project</b> to
                  demonstrate full-stack web development skills. Built using the <b>MERN Stack</b>, it offers a seamless
                  online shopping experience, showcasing robust functionalities like <b>user authentication</b>,{" "}
                  <b>product listings</b>, <b>shopping cart management</b>, and <b>order processing</b>. The entire site
                  is designed with a <b>responsive design</b>, ensuring a smooth experience across both desktop and
                  mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light dark:bg-dark-primary py-1">
        <div className="section-container">
          <h3 className="text-3xl lg:text-4xl text-gray font-extrabold dark:text-light">Technologies Used</h3>
          <hr className="line-break" />

          <div className="space-y-4 lg:space-y-7 mt-6 font-normal dark:text-light text-base lg:text-lg">
            <p className="float-left max-w-2xl">
              SwiftShop&apos;s backend is powered by <b>Node.js</b> and <b>Express.js</b>, providing a secure and
              scalable API. We use <b>MongoDB</b> for efficient data storage, with <b>Mongoose</b> for seamless
              interaction, and <b>JWT (JSON Web Tokens)</b> for secure authentication. This robust foundation supports
              crucial features like <b>product management</b> (creating, updating, deleting items) and real-time{" "}
              <b>order processing</b>. The frontend, built with <b>React.js</b> and <b>Redux</b>, delivers a dynamic and
              interactive user interface, styled efficiently with <b>TailwindCSS</b>.
            </p>
            <div className="clear-both"></div>

            <p className="float-right max-w-2xl">
              This project serves as a practical exercise in building a complete e-commerce ecosystem, highlighting
              skills in modern web technologies and best practices. Explore the on GitHub to see the implementation
              details. You can explore the source code for this project on
              <a
                href="https://github.com/sam4web/shopswift-frontend"
                className="text-primary font-medium hover:underline"
                target="_blank"
              >
                GitHub
              </a>
              .
            </p>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
