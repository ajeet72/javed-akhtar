export default function TestimonialsSection() {
    const testimonials = [
      {
        name: 'Alice Johnson',
        text: 'This service is amazing! Highly recommended to anyone who wants quality.',
      },
      {
        name: 'Bob Smith',
        text: 'Fast, reliable, and beautiful. What more could you want?',
      },
      {
        name: 'Charlie Rose',
        text: 'Absolutely fantastic experience from start to finish.',
      },
    ];
  
    return (
      <section className="bg-[#11071F] py-16 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-10">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white text-black bg-opacity-10 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <p className="text-lg italic mb-4">“{t.text}”</p>
                <h4 className="text-xl font-semibold">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  