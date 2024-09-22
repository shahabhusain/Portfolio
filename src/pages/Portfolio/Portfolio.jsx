import { useState } from "react";
import { FaRegEye } from "react-icons/fa";

const Portfolio = () => {
  const projectData = [
    {
      img: '/images/Capture.PNG', // Corrected path
      title: "Event Website",
      link: "https://event-websit.vercel.app/",
      category: "Frontend",
    },
    {
      img: "/images/Capture1.PNG", // Corrected path
      title: "Car Dashboard",
      link: "https://react-car-dashboard-two.vercel.app/dashboard",
      category: "Frontend",
    },
    {
      img: "/images/Capture3.PNG", // Corrected path
      title: "Jurised",
      link: "https://juris-ed.vercel.app/",
      category: "Frontend",
    },
    {
      img: "/images/Capture4.PNG", // Corrected path
      title: "Back Dashboard",
      link: "https://bank-dashborad.vercel.app/",
      category: "Frontend",
    },
    {
      img: "/images/Capture5.PNG", // Corrected path
      title: "Company Website",
      link: "https://company-website-seven-delta.vercel.app/",
      category: "Frontend",
    },
    {
      img: "/images/Capture6.PNG", // Corrected path
      title: "Transport",
      link: "https://transport-psi-six.vercel.app/",
      category: "Frontend",
    },
    {
      img: "/images/Capture7.PNG", // Corrected path
      title: "Travel",
      link: "https://travel-website-orcin-ten.vercel.app/",
      category: "Frontend",
    },
    {
      img: "/images/Capture8.PNG", // Corrected path
      title: "X-Beat",
      link: "https://x-beat-three.vercel.app/",
      category: "Frontend",
    },
    {
      img: "/images/Capture9.PNG", // Corrected path
      title: "Hall Management",
      link: "https://hall-managment.vercel.app/",
      category: "Frontend",
    },
  ];

  // State to store the filtered projects
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projectData);
    } else {
      const filtered = projectData.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {["All", "Frontend", "Full Stack"].map((category) => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? "active" : ""}
              onClick={() => handleFilterClick(category)}
              data-filter-btn
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={index}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.img} alt="" loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
