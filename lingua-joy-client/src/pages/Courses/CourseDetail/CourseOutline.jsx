const CourseOutline = ({ courseName }) => {
  return (
    <>
      <div className="my-2 " data-aos="fade-up-right" data-aos-duration="000">
        <p
          className="text-center text-xl leading-3 mb-5 font-semibold lg:font-bold"
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          Course Outline
        </p>
        <div className="my-2 mb-2 text-sm">
          <p
            className="font-semibold"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            Module 1: Introduction to Language
          </p>
          <ul className="text-xs lg:text-sm list-disc lg:ml-8">
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Overview of the course{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Introduction to the instructor
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Expectations and objectives
            </li>
          </ul>
        </div>
        <div className="my-2 mb-2 text-sm">
          <p
            className="font-semibold"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            Module 2: Fundamentals of {courseName}
          </p>
          <ul className="text-xs lg:text-sm list-disc lg:ml-8">
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Understanding the basics{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              {" "}
              - Key concepts and terminology{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              {" "}
              - Practical exercises
            </li>
          </ul>
        </div>
        <div className="my-2 mb-2 text-sm">
          <p
            className="font-semibold"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            Module 3: Advanced Topics in {courseName}
          </p>
          <ul className="text-xs lg:text-sm list-disc lg:ml-8">
            <li data-aos="fade-up-right" data-aos-duration="2000">
              Exploring advanced concepts
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              {" "}
              - Real-world applications
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Case studies and discussions
            </li>
          </ul>
        </div>
        <div className="my-2 mb-2 text-sm">
          <p
            className="font-semibold"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            Module 4: Hands-on Projects
          </p>
          <ul className="text-xs lg:text-sm list-disc lg:ml-8">
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Applying knowledge through projects{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Building practical skills{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              {" "}
              - Project presentations and feedback
            </li>
          </ul>
        </div>
        <div className="my-2 mb-2 text-sm">
          <p
            className="font-semibold"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            {" "}
            Module 5: English Grammar Deep Dive
          </p>
          <ul className="text-xs lg:text-sm list-disc lg:ml-8">
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - In-depth exploration of a specific topic
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              {" "}
              - Guest lectures or industry experts{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              {" "}
              - Q&A sessions
            </li>
          </ul>
        </div>
        <div className="my-2 mb-2 text-sm">
          <p
            className="font-semibold"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            Module 6: Assessments and Quizzes
          </p>
          <ul className="text-xs lg:text-sm list-disc lg:ml-8">
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Regular quizzes to test understanding
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              {" "}
              - Mid-term assessments{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              {" "}
              - Final exam preparation
            </li>
          </ul>
        </div>
        <div className="my-2 mb-2 text-sm">
          <p
            className="font-semibold"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            {" "}
            Module 7: Resources and References
          </p>
          <ul className="text-xs lg:text-sm list-disc lg:ml-8">
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Recommended reading materials{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Online resources and articles{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              {" "}
              - Additional references for further learning
            </li>
          </ul>
        </div>
        <div className="my-2 mb-2 text-sm">
          <p
            className="font-semibold"
            data-aos="fade-up-right"
            data-aos-duration="2000"
          >
            Module 8: Conclusion and Certification
          </p>
          <ul className="text-xs lg:text-sm list-disc lg:ml-8">
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Recap of the course{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Final thoughts and takeaways{" "}
            </li>
            <li data-aos="fade-up-right" data-aos-duration="2000">
              - Certificate of completion
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseOutline;
