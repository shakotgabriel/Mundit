import { Button } from '@/components/ui/button';
import { TransitionLink } from '@/components/utils/transitionlink';

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-teal-300 text-white scroll-scale rounded-4xl">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Work With Us?
            </h2>
            <p className="max-w-[600px] md:text-xl lg:text-base xl:text-xl">
              Let us help you achieve your real estate goals with our professional property consultancy services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
            <TransitionLink href="/contacts">
              <Button variant="secondary" size="lg" className="font-black bg-white text-teal-800  hover:bg-teal-800 hover:text-white scroll-scale">
                Contact Us Today
              </Button>
            </TransitionLink>
            <TransitionLink href="/services">
              <Button
                variant="secondary"
                size="lg"
                className="font-black bg-teal-800 text-white  hover:bg-white hover:text-teal-800 "
              >
                Explore Our Services
              </Button>
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
