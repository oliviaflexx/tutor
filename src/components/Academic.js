import Essay from "./essay.jpeg";

const Academic = () => {
  return (
    <div className="bg-cyan-500 py-20 flex flex-col items-center text-lg p-2">
      <div className="max-w-3xl w-full bg-white shadow-sm rounded-lg p-6 text-black space-y-2">
        <h1 className="font-semibold text-3xl md:text-5xl">
          Academic Writing Preparation
        </h1>
        <img src={Essay} />
        <p>
          Research shows how important strong English skills are for college
          students. Low levels in English are connected to poor academic
          performance of international students in all areas, not just in
          English classes. Your success, then, in a US college or university
          depends largely upon your English language skill. Wherever your skills
          are at, I will help you develop them so that you are ready to succeed
          at the US school of your choice. In addition, I will help you
          understand the typical processes and vocabulary of an English class
          and the expectations for student participation in many US classrooms.
        </p>
        <p>I will help you</p>
        <ul className="list-disc list-inside">
          <li>Develop your English language skills, if needed</li>
          <li>
            Follow the writing process used in many English classrooms in the US
          </li>
          <li>
            Understand culturally different notions of research, plagiarism and
            source documentation
          </li>
          <li>
            Understand common expectations for your participation in US
            classrooms
          </li>
          <li>Know how to communicate with your professors</li>
          <li>Write to meet the standards of academic writing in the US</li>
        </ul>
      </div>
    </div>
  );
};

export default Academic;
