
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Waste Removal Advice & Guides | GB Waste Removals Blog',
  description:
    'Read practical waste removal, rubbish clearance, recycling and disposal guides from GB Waste Removals. Advice for homes and businesses across Birmingham and the Midlands.',
  alternates: {
    canonical: 'https://www.gbwasteremovals.co.uk/blog',
  },
  openGraph: {
    title: 'Waste Removal Advice & Guides | GB Waste Removals',
    description:
      'Helpful guides about household waste, garden clearance, commercial rubbish removal, furniture disposal and responsible recycling.',
    url: 'https://www.gbwasteremovals.co.uk/blog',
    siteName: 'GB Waste Removals',
    type: 'website',
    locale: 'en_GB',
  },
};

const articles = [
  {
    title: 'Waste Removal vs Skip Hire: Which Is Better?',
    description:
      'Compare waste removal services and skip hire to understand which option may suit your clearance project, budget and available space.',
    category: 'Household Waste',
    slug: 'waste-removal-vs-skip-hire',
    readTime: '6 min read',
  },
  {
    title: 'How Much Does Waste Removal Cost in Birmingham?',
    description:
      'Understand the factors that affect rubbish removal prices, including waste volume, type of materials and access to your property.',
    category: 'Household Waste',
    slug: 'waste-removal-cost-birmingham',
    readTime: '7 min read',
  },
  {
    title: 'How to Dispose of Garden Waste Responsibly',
    description:
      'Learn about common garden waste types, suitable disposal options and ways to manage green waste responsibly.',
    category: 'Garden Waste',
    slug: 'how-to-dispose-of-garden-waste',
    readTime: '5 min read',
  },
  {
    title: 'What Happens to Your Waste After Collection?',
    description:
      'Discover the different stages of waste handling, sorting, recovery and responsible disposal after collection.',
    category: 'Recycling',
    slug: 'what-happens-to-waste-after-collection',
    readTime: '6 min read',
  },
  {
    title: 'Furniture Removal: How to Dispose of Bulky Items',
    description:
      'Explore practical options for clearing unwanted sofas, wardrobes, beds and other bulky household furniture.',
    category: 'Furniture Removal',
    slug: 'how-to-dispose-of-bulky-furniture',
    readTime: '5 min read',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-[#071739]">

      {/* Hero */}
      <section className="bg-[#0A1F44] px-4 py-20 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-[#CF142B] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            GB Waste Removals Blog
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Waste Removal Advice, Tips & Helpful Guides
          </h1>

          <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Explore practical advice about rubbish removal, household
            clearance, garden waste, commercial waste and responsible
            disposal. Helpful information for homes and businesses
            across Birmingham and the Midlands.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">

        <div className="mb-9">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F44]">
            Waste Removal Guides & Articles
          </h2>

          <p className="text-gray-600 mt-2">
            Useful information to help you make informed waste disposal decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

          {articles.map((article) => (
            <article
              key={article.slug}
              className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
            >

              {/* Article Image Placeholder */}
              <div className="aspect-[16/9] bg-[#F4F6FA] flex items-center justify-center">
                <span className="text-sm font-medium text-gray-400">
                  GB Waste Removals
                </span>
              </div>

              <div className="p-6">

                <span className="text-xs font-bold uppercase tracking-wider text-[#CF142B]">
                  {article.category}
                </span>

                <h3 className="text-xl font-bold text-[#0A1F44] mt-3 mb-3 group-hover:text-[#CF142B] transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {article.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-5">
                  <span>GB Waste Removals</span>
                  <span>{article.readTime}</span>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-[#CF142B] font-bold text-sm hover:underline"
                >
                  Read Article
                  <span aria-hidden="true">→</span>
                </Link>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0A1F44] px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need Help With Waste Removal?
          </h2>

          <p className="text-white/85 leading-relaxed mb-7">
            Whether you need household rubbish collection, garden
            clearance, commercial waste removal or bulky furniture
            collection, GB Waste Removals can help.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center bg-[#CF142B] hover:bg-red-700 text-white font-bold px-7 py-3 rounded-xl transition-colors"
          >
            Request a Free Quote
          </Link>

        </div>
      </section>

    </main>
  );
}
