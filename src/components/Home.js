import { NavLink } from "react-router-dom";
import {
  AcademicCapIcon,
  PencilIcon,
  DocumentTextIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <section className="bg-cyan-600">
      <div className="pt-16 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="p-4 flex flex-col md:flex-row md:px-10 lg:px-20">
            <div className="order-1 md:order-2 md:p-12 md:pr-0">
              <img
                className="rounded-lg"
                alt=""
                src="https://media.istockphoto.com/photos/happy-black-student-raising-arm-to-answer-question-while-attending-picture-id1307457391?k=20&m=1307457391&s=612x612&w=0&h=Rj2wqBSqQ6iwwIPwRrdtpO7RAjkS4JrWtA7QjvZUgyc="
              ></img>
            </div>
            <div className="order-2 md:order-1 md:text-left text-center flex flex-col justify-center md:justify-start mt-10">
              <h2 className="font-bold text-3xl mb-4 md:text-5xl md:mb-6">
                Do you dream of studying in the US?
              </h2>
              <p className="text-white/60 mb-4 md:mb-6">
                Are you overwhelmed by the admissions process? Is your English
                strong enough for college level work in the US?
              </p>
              <NavLink
                className="mx-auto md:mx-0 w-fit font-semibold px-8 py-2 rounded-full bg-white/10 shadow-sm shadow-cyan-700 border-2 border-white/10"
                to="/contact"
              >
                Get Help
              </NavLink>
            </div>
          </div>
          <div className="lg:px-20 md:px-10 pb-16 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            <div className="rounded-lg h-full w-full bg-cyan-500 shadow-sm px-20 py-16 text-center text-2xl font-semibold lg:p-10 flex flex-col justify-center items-center">
              <DocumentTextIcon className="text-white/60 w-20 h-20 mb-2" />
              Admissions Application
            </div>
            <div className="rounded-lg h-full w-full bg-cyan-500 shadow-sm px-20 py-16 text-center text-2xl font-semibold lg:p-10 flex flex-col justify-center items-center">
              <PencilIcon className="text-white/60 w-16 h-16 mb-2" />
              Writing Skills
            </div>
            <div className="rounded-lg h-full w-full bg-cyan-500 shadow-sm px-20 py-16 text-center text-2xl font-semibold lg:p-10 flex flex-col justify-center items-center">
              <AcademicCapIcon className="text-white/60 w-20 h-16 mb-2" />
              US University Expectations
            </div>
            <div className="rounded-lg h-full w-full bg-cyan-500 shadow-sm px-20 py-16 text-center text-2xl font-semibold lg:p-10 flex flex-col justify-center items-center">
              <LanguageIcon className="text-white/60 w-20 h-16 mb-2" />
              English Language Skills
            </div>
          </div>
        </div>
        <div className="bg-white h-60 -mt-[12rem] hidden lg:block"></div>
      </div>
    </section>
  );
};

export default Home;
