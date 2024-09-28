import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  // console.log(course);
  const {
    _id,
    courseImage,
    courseName,
    instructorName,
    // totalStudent,
    availableSeat,
    price,
  } = course;

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div
        className={`${
          availableSeat === 0 ? "bg-red-600" : "bg-[#fafafa]"
        } rounded-lg shadow-lg`}
      >
        <div className="flex justify-center p-4">
          <img
            src={courseImage}
            alt=""
            className="w-full rounded-md h-48"
          />
        </div>
        <div
          className={`mx-4 lg:mx-6 ${
            availableSeat === 0 ? "text-white" : "text-[#703e78]"
          }`}
        >
          <p className="lg:text-xl mb-1 font-bold leading-relaxed">{courseName}</p>
          <p className="mb-1 text-sm">
            Conducted by{" "}
            <span className="lg:text-lg font-semibold">{instructorName}</span>
          </p>
          <div className="flex justify-between text-sm">
            <p>Available Seat: {availableSeat}</p>
            <p>Fee: ${price}</p>
          </div>
        </div>
        <div className="mx-4 lg:mx-6 text-white text-center">
          <Link to={`/course/${_id}`}>
            <button
              className={`w-full  my-4 py-2 rounded-md ${
                availableSeat === 0
                  ? "bg-white text-red-800 hover:bg-[#fafafa]"
                  : "bg-[#ba68c8] text-white hover:bg-[#703e78]"
              }`}
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
