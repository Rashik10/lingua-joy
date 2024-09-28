import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CourseCard = ({ topCourse }) => {
  const {
    _id,
    courseImage,
    courseName,
    instructorName,
    // totalStudent,
    // price,
  } = topCourse;
  //   console.log(courseImage);
  // const availableSeat = totalSeat - totalStudent;

  return (
    <>
      <div
        className="shadow-lg rounded-lg border-indigo-600 h-28"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex">
          <div>
            <img
              src={courseImage}
              className="h-24 w-24 my-2 mx-4 rounded-lg"
              alt=""
            />
          </div>
          <div className="m-2 w-2/3 h-24">
            <h1 className="text-[#703e78] font-semibold text-md mb-1">
              {courseName}
            </h1>
            <p className="text-[#703e78] font-medium text-sm">
              By {instructorName}
            </p>
            <div className="flex justify-end items-end">
              <div
                className="rounded-full bg-[#ba68c8] p-2 hover:tooltip hover:tooltip-open hover:tooltip-bottom"
                data-tip="Details"
              >
                <Link to={`/course/${_id}`} className="">
                  <FaArrowRight className="text-white h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
