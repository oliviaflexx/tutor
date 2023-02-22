import College from "./college.jpeg";

const University = () => {
  return (
    <div className="bg-cyan-500 py-20 flex flex-col items-center text-lg p-2">
      <div className="max-w-3xl w-full bg-white shadow-sm rounded-lg p-6 text-black space-y-2">
        <h1 className="font-semibold text-3xl md:text-5xl">
          University Admissions Coaching
        </h1>
        <img src={College} />
        <p>
          US colleges and universities want international students on their
          campuses. International students enrich college communities and
          classrooms with their experiences and perspectives from outside the
          US. The admissions process for schools in the US might be very
          different from what you know, though. US schools consider more than
          grades in their admissions decisions. With my help, you will have a
          unique and complete application portfolio so you can soon find
          yourself on the exciting campus that is the best fit for you!
        </p>
        <p>I will help you</p>
        <ul className="list-disc list-inside">
          <li>
            Examine your college and university options to find the best fit for
            you.
          </li>
          <li>Complete the different parts of the admissions application</li>
          <li>Stay on track with deadlines in the application process</li>
          <li>
            Understand the importance of your extracurricular activities,
            volunteer work, and achievements in gaining admission to your dream
            school.
          </li>
          <li>
            Write an admissions essay that tells your story in your unique voice
            and makes you a memorable applicant.
          </li>
          <li>Understand the admission offers that you receive.</li>
        </ul>
      </div>
    </div>
  );
};

export default University;
