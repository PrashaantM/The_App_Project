import React, { useState } from 'react';

const Courses = () => {
  const courses = [
    {
      title: "Anatomy",
      description: "Study of the human body",
      modules: [
        { title: "Introduction to Anatomy", lessons: ["Bones", "Muscles", "Organs"], progress: 40 },
        { title: "Systems of the Body", lessons: ["Circulatory System", "Nervous System", "Respiratory System"], progress: 10 },
      ],
    },
    {
      title: "Physiology",
      description: "Study of body functions",
      modules: [
        { title: "Cell Physiology", lessons: ["Cell Membrane", "Cell Communication"], progress: 60 },
        { title: "Organ Physiology", lessons: ["Heart", "Lungs", "Kidneys"], progress: 30 },
      ],
    },
    {
      title: "Biochemistry",
      description: "Study of chemical processes in the body",
      modules: [
        { title: "Basic Biochemistry", lessons: ["Carbohydrates", "Proteins", "Lipids"], progress: 80 },
        { title: "Metabolism", lessons: ["Glycolysis", "Citric Acid Cycle"], progress: 50 },
      ],
    },
  ];

  // State to manage the modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle starting a lesson or module
  const startLesson = (lesson) => {
    setModalContent(lesson);
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
  };

  // Function to filter courses and modules by search term
  const filterCourses = (courses) => {
    return courses.filter((course) => {
      const courseMatches = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());

      const moduleMatches = course.modules.some(module =>
        module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.lessons.some(lesson => lesson.toLowerCase().includes(searchTerm.toLowerCase()))
      );

      return courseMatches || moduleMatches;
    });
  };

  // Sorting function for courses and modules
  const sortCourses = (courses) => {
    return courses.sort((a, b) => a.title.localeCompare(b.title));
  };

  const filteredAndSortedCourses = sortCourses(filterCourses(courses));

  return (
    <div className="courses-container">
      <h3>Available Courses</h3>
      
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Courses or Lessons"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="courses-list">
        {filteredAndSortedCourses.map((course, courseIndex) => (
          <div key={courseIndex} className="course-card">
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            <div className="modules-list">
              {course.modules.map((module, moduleIndex) => (
                <div key={moduleIndex} className="module-card">
                  <h5>{module.title}</h5>
                  <p>Progress: {module.progress}%</p>
                  <div className="lessons-list">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="lesson-item">
                        <p>{lesson}</p>
                        <button
                          onClick={() => startLesson(lesson)}
                          className="start-lesson-btn"
                        >
                          Start Lesson
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Component */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Start Lesson</h4>
            <p>You are about to start: <strong>{modalContent}</strong></p>
            <button onClick={closeModal} className="close-modal-btn">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Simple styling */}
      <style jsx>{`
        .courses-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .courses-list {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
        }
        .course-card {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .module-card {
          margin-top: 10px;
          padding: 15px;
          background-color: #e0e0e0;
          border-radius: 8px;
        }
        .lessons-list {
          margin-top: 10px;
        }
        .lesson-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .start-lesson-btn {
          padding: 5px 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .start-lesson-btn:hover {
          background-color: #0056b3;
        }
        h3 {
          text-align: center;
          margin-bottom: 20px;
        }
        .search-bar {
          margin-bottom: 20px;
          text-align: center;
        }
        .search-bar input {
          padding: 10px;
          width: 80%;
          max-width: 400px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        /* Modal styling */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 300px;
          text-align: center;
        }
        .close-modal-btn {
          margin-top: 15px;
          padding: 5px 10px;
          background-color: #dc3545;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .close-modal-btn:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
  );
};

export default Courses;
