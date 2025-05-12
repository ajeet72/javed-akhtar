export default function ContactForm() {
  return (
    <div className="min-h-fit text-white flex items-center justify-center px-8 py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
        {/* Left: Info Section */}
        <div className="w-full md:w-1/2 px-4 lg:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight ">
            Ask whatever you have <br /> in your mind
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.
          </p>
          <div className="space-y-4 text-sm text-gray-200">
            <div className="flex items-center space-x-3">
              <span className="text-xl">✉️</span>
              <span>admin@raddision.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">📞</span>
              <span>(969) 819-8061</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xl">📍</span>
              <span>43 Roselle St. New York</span>
            </div>
          </div>
        </div>

        {/* Right: Form Section */}
        <form className="w-full md:w-1/2 bg-[#111111] p-6 sm:p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="jane@framer.com"
              className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Message</label>
            <textarea
              placeholder="Hi, I am reaching out for..."
              rows={4}
              className="w-full bg-black text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full bg-[#6633FF] hover:bg-[#4b25cc] transition-colors text-white py-3 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
