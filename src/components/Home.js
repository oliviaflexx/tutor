import { NavLink } from "react-router-dom";
import {
  AcademicCapIcon,
  PencilIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import ProfileImage from "./profile.jpeg";

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
              />
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
          <div className="lg:px-20 md:px-10 pb-16 mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
            <a
              href="/university-admissions-coaching"
              className="rounded-lg h-full w-full bg-cyan-500 shadow-sm px-20 py-16 text-center text-2xl font-semibold lg:p-10 flex flex-col justify-center items-center"
            >
              <AcademicCapIcon className="text-white/60 w-20 h-16 mb-2" />
              University Admissions Coaching
            </a>
            <a
              href="/academic-writing-preparation"
              className="rounded-lg h-full w-full bg-cyan-500 shadow-sm px-20 py-16 text-center text-2xl font-semibold lg:p-10 flex flex-col justify-center items-center"
            >
              <PencilIcon className="text-white/60 w-16 h-16 mb-2" />
              Academic Writing Preparation
            </a>
            <a
              href="/english-language-tutoring"
              className="rounded-lg h-full w-full bg-cyan-500 shadow-sm px-20 py-16 text-center text-2xl font-semibold lg:p-10 flex flex-col justify-center items-center"
            >
              <LanguageIcon className="text-white/60 w-20 h-16 mb-2" />
              English Language Tutoring
            </a>
          </div>
        </div>
        <div className="bg-white h-60 -mt-[12rem] hidden lg:block md:px-10 lg:px-20"></div>
        <div className="bg-white pt-10 lg:pt-0">
          <h2 className="font-bold text-4xl md:text-5xl text-center mb-4 text-slate-900">
            Hi, I'm Michelle...
          </h2>
          <div className="grid grid-cols-1 p-4 md:px-10 lg:px-20 md:grid-cols-3 gap-4">
            <div className="flex justify-center items-center col-span-1 ">
              <img
                className="rounded-lg h-72 object-contain"
                alt=""
                src={ProfileImage}
              />
            </div>

            <div className="col-span-2 text-lg space-y-4 text-slate-900 flex flex-col justify-center items-center mb-6">
              <p>
                I’d like to help you tell the unique story of your talents and
                qualifications that will gain you admission to the US college or
                university of your choice. The application process is
                complicated. It is time consuming, and, likely, unfamiliar to
                families outside of the US. I can help you work through the
                process and meet crucial deadlines. I want you to be excited
                about the idea of studying in the US rather than anxious about
                getting in.
              </p>
              <p>
                I can also help you develop the English language skills expected
                in university, in particular if your education has not been in
                English. The preparation that I give you will help you to
                succeed not only in English classes but in your other courses as
                well.
              </p>
              <p>
                I have a PhD in American literature and taught English in the US
                at the college level for over 25 years. In addition, I have two
                children who attended university in another country, so I
                understand how challenging the process can be.
              </p>
              <p>
                As a teacher, one of my strengths is building relationships with
                my students. I love working individually with students,
                supporting them to get to their goals and dreams. If college or
                university in the US is one of your dreams, contact me today so
                that we can turn that dream into a reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
