import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
// import img1 from "../../public/images/Capture.png";

const Portfolio = () => {
  const projectData = [
    {
      img: '/public/images/Capture.png',
      title: "",
      discription: "",
      category: "Frontend",
    },
    {
      img: "/public/images/Capture1.png",
      title: "",
      discription: "",
      category: "Frontend",
    },
    {
      img: "/public/images/Capture3.png",
      title: "",
      discription: "",
      category: "Frontend",
    },

    {
      img: "/public/images/Capture4.png",
      title: "",
      discription: "",
      category: "Frontend",
    },

    {
      img: "/public/images/Capture5.png",
      title: "",
      discription: "",
      category: "Frontend",
    },

    {
      img: "/public/images/Capture6.png",
      title: "",
      discription: "",
      category: "Frontend",
    },

    {
      img: "/public/images/Capture7.png",
      title: "",
      discription: "",
      category: "Frontend",
    },

    {
      img: "/public/images/Capture8.png",
      title: "",
      discription: "",
      category: "Frontend",
    },

    {
      img: "/public/images/Capture9.png",
      title: "",
      discription: "",
      category: "Frontend",
    },
    // {
    //   img: "https://tse2.mm.bing.net/th?id=OIP.T2w1wh1qRepNacvZE44JNwHaEK&pid=Api&P=0&h=220",
    //   title: "",
    //   discription: "",
    //   category: "Backend",
    // },
    // {
    //   img: "https://tse2.mm.bing.net/th?id=OIP.T2w1wh1qRepNacvZE44JNwHaEK&pid=Api&P=0&h=220",
    //   title: "",
    //   discription: "",
    //   category: "Backend",
    // },
    // {
    //   img: "https://tse2.mm.bing.net/th?id=OIP.T2w1wh1qRepNacvZE44JNwHaEK&pid=Api&P=0&h=220",
    //   title: "",
    //   discription: "",
    //   category: "Backend",
    // },
    // {
    //   img: "https://tse2.mm.bing.net/th?id=OIP.T2w1wh1qRepNacvZE44JNwHaEK&pid=Api&P=0&h=220",
    //   title: "",
    //   discription: "",
    //   category: "Backend",
    // },
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
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
