import { EnvelopeIcon } from "@heroicons/react/24/outline";
const Contact = () => {
  return (
    <div className="bg-cyan-600">
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl text-center font-bold text-white mb-6">
          Contact
        </h1>
        <div className="grid lg:grid-cols-2 text-xl gap-2">
          <p className="text-white m-auto p-2">
            Contact me for a complimentary consultation and to learn about my
            competitive pricing and packages. Most businesses that provide
            similar university admissions coaching charge from $100 USD an hour
            and higher. I will help you for less.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify
            className="bg-cyan-500 shadow-sm p-2 md:px-20 md:py-6 rounded-lg space-y-4"
          >
            <EnvelopeIcon className="text-white/60 w-20 h-16 m-auto" />
            <input type="hidden" name="form-name" value="contact" />
            <p className="space-y-1">
              <label className="block">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full rounded-lg p-2"
              />
            </p>
            <p className="space-y-1">
              <label className="block">City and country:</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your city and country"
                className="w-full rounded-lg p-2"
              />
            </p>
            <p className="space-y-1">
              <label className="block">Email address:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg p-2"
              />
            </p>
            <p className="space-y-1">
              <label className="block">How can I help you?</label>
              <textarea
                name="message"
                className="w-full rounded-lg p-2"
              ></textarea>
            </p>
            <button
              type="submit"
              className="text-white mx-auto md:mx-0 w-fit font-semibold px-8 py-2 rounded-full bg-cyan-600 shadow-sm shadow-cyan-700 border-2 border-white/10"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
