import { Card, CardHeader, CardContent } from '@/components/ui/card';

const testimonialData = [
  {
    id: 1,
    name: "Changk Gold",
    
    quote: "Mundit Investment Ltd's property valuation services were thorough and professional. Their expertise helped us make informed decisions about our real estate investments.",
    
  },
  {
    id: 2,
    name: "UAP Towers",
    
    quote: "Their building design team showed incredible creativity and attention to detail. They transformed our vision into reality while staying within budget.",
  
  },
  {
    id: 3,
    name: "Saddeco Building",
  
    quote: "The real estate management services provided by Mundit Investment have been outstanding. Their team's dedication and professionalism are unmatched in South Sudan.",
  
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 container  md:py-16 lg:py-20 bg-white scroll-scale">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-800">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-teal-600 md:text-xl lg:text-base xl:text-xl">
              A referral from you is the highest compliment we can receive!
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 scroll-scale">
              <CardHeader>
                <div className="text-center">
                  <h4 className="font-bold text-teal-800 text-lg">{testimonial.name}</h4>
               </div>
              </CardHeader>
              <CardContent>
                <p className="text-teal-600 italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
