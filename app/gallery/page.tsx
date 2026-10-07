import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

const galleryImages = [
  {
    src: '/gallery/pic1.webp',
    alt: 'GB Waste Removals professional waste collection and rubbish removal',
    title: 'Professional Waste Removal',
    description:
      'Professional rubbish collection and waste removal for homes and businesses.',
  },
  {
    src: '/gallery/pic2.webp',
    alt: 'House clearance and unwanted furniture removal by GB Waste Removals',
    title: 'House Clearance',
    description:
      'Efficient house clearance and removal of unwanted household items.',
  },
  {
    src: '/gallery/pic3.webp',
    alt: 'Garden waste removal and green waste collection service',
    title: 'Garden Waste Removal',
    description:
      'Garden waste collection and removal of unwanted outdoor waste.',
  },
  {
    src: '/gallery/pic4.webp',
    alt: 'Furniture removal and bulky waste collection service',
    title: 'Furniture Removal',
    description:
      'Bulky furniture and unwanted item removal from homes and properties.',
  },
  {
    src: '/gallery/pic5.webp',
    alt: 'Commercial waste collection and business waste removal',
    title: 'Commercial Waste Removal',
    description:
      'Reliable waste collection and clearance services for businesses.',
  },
  {
    src: '/gallery/pic6.webp',
    alt: 'Builders waste and construction rubbish removal',
    title: 'Builders Waste Removal',
    description:
      'Construction waste, building materials and site clearance services.',
  },
  {
    src: '/gallery/pic7.webp',
    alt: 'Rubbish collection and waste clearance by GB Waste Removals',
    title: 'Rubbish Collection',
    description:
      'Fast and professional rubbish collection for residential and commercial properties.',
  },
  {
    src: '/gallery/pic8.webp',
    alt: 'GB Waste Removals waste clearance service in the UK',
    title: 'Waste Clearance',
    description:
      'Professional waste clearance and responsible waste removal services.',
  },
];

export const metadata = {
  title: 'Waste Removal Gallery | GB Waste Removals',
  description:
    'View the GB Waste Removals gallery featuring house clearance, garden waste removal, furniture collection, commercial waste and rubbish removal work across Birmingham and surrounding areas.',
  alternates: {
    canonical: 'https://www.gbwasteremovals.co.uk/gallery',
  },
  openGraph: {
    title: 'Waste Removal Gallery | GB Waste Removals',
    description:
      'See examples of waste removal, rubbish collection, house clearance, garden waste and commercial clearance services from GB Waste Removals.',
    url: 'https://www.gbwasteremovals.co.uk/gallery',
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white text-[#071739] pt-[100px] xl:pt-[180px]">
      <Header showBackButton />

      {/* Hero */}
      <section className="bg-[#0A1F44] text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#CF142B] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
            Our Work
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Waste Removal Gallery
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
            Explore examples of professional waste removal, rubbish collection,
            house clearance, garden waste removal, furniture clearance and
            commercial waste services carried out by GB Waste Removals.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section
        className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[#CF142B] font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
              Recent Projects
            </p>

            <h2
              id="gallery-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1F44] mt-2"
            >
              Our Waste Removal Work
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
              Take a look at examples of waste clearance and rubbish removal
              work completed for residential and commercial customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((image) => (
              <article
                key={image.src}
                className="group overflow-hidden rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A1F44]">
                    {image.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1F44] px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Need Waste Removed?
          </h2>

          <p className="mt-4 text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed">
            From house clearance and garden waste to furniture, commercial and
            builders waste, GB Waste Removals provides professional waste
            collection and clearance services.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center mt-7 bg-[#CF142B] hover:bg-[#b81025] text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg"
          >
            Request a Waste Removal Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}