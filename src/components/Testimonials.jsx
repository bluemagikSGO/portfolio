import Reveal from "./Reveal";

// Verbatim, as given by each person.
const TESTIMONIALS = [
  {
    name: "Donald",
    role: "Client",
    quote:
      "Steven is an easy-to-work-with developer and he really knows how to make complicated tasks come alive. I recommend him.",
  },
  {
    name: "Seyifunmi",
    role: "Product Designer",
    quote:
      "A good frontend developer with creative eyes for simplified UX. I enjoy working with Steve.",
  },
  {
    name: "Ruben",
    role: "Entrepreneur",
    quote:
      "A friend recommended Steve and I must confess, I wish I had known him a while ago. My projects are done exactly to my taste with the right attention to details.",
  },
];

const Testimonials = () => (
  <section
    id="testimonials"
    aria-labelledby="testimonials-title"
    className="border-t border-line"
  >
    <div className="wrap py-24 sm:py-32">
      <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-10">
        <p className="label flex gap-4 text-subtle lg:col-span-3 lg:pt-3">
          <span>04</span>
          <span>Kind words</span>
        </p>
        <h2 id="testimonials-title" className="heading text-[clamp(2.25rem,5vw,4.25rem)] lg:col-span-9">
          From people I've worked with.
        </h2>
      </div>

      <ul className="mt-16 grid gap-y-12 sm:mt-20 md:grid-cols-3 md:gap-x-10">
        {TESTIMONIALS.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 80} className="border-t border-ink pt-8">
            <figure className="flex h-full flex-col">
              <blockquote className="font-serif text-[1.375rem] leading-[1.35] tracking-[-0.01em]">
                <p>
                  <span aria-hidden="true" className="-ml-[0.4em] text-accent">“</span>
                  {t.quote}
                  <span aria-hidden="true" className="text-accent">”</span>
                </p>
              </blockquote>
              <figcaption className="mt-8 text-[14px]">
                <span className="font-medium">{t.name}</span>
                <span className="text-subtle">, {t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Testimonials;
