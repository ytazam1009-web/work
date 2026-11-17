
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const articles = [
  {
    slug: 'waste-removal-vs-skip-hire',
    title: 'Waste Removal vs Skip Hire: Which Is Better?',
    description:
      'Compare waste removal services and skip hire to find a suitable option for your rubbish clearance project.',
    category: 'Household Waste',
    content: [
      {
        heading: 'Understanding Waste Removal Services',
        paragraphs: [
          'A waste removal service involves a collection team visiting your property, loading the agreed waste and transporting it for appropriate handling and disposal.',
          'This option can be useful when you have bulky household items, unwanted furniture, general rubbish or waste from a property clearance.',
        ],
      },
      {
        heading: 'Understanding Skip Hire',
        paragraphs: [
          'Skip hire involves arranging a container that is delivered to your property or an agreed location. You normally load the waste into the skip yourself.',
          'You may also need to consider available space, access, permits where applicable and the type of waste accepted by the skip provider.',
        ],
      },
      {
        heading: 'Which Option Should You Choose?',
        paragraphs: [
          'The right option depends on the amount and type of waste, how quickly you need it removed, whether you can load it yourself and whether there is suitable space for a skip.',
          'If you want a collection team to load the agreed rubbish, a waste removal service may be more convenient. If you have a suitable location and prefer to fill a container over time, skip hire may be worth considering.',
        ],
      },
      {
        heading: 'Get Help With Your Waste Clearance',
        paragraphs: [
          'GB Waste Removals provides waste collection and clearance services for households and businesses across Birmingham, Coventry, Leicester, Walsall and Wolverhampton.',
          'Contact our team to discuss your waste and request a quote based on your requirements.',
        ],
      },
    ],
  },
  {
    slug: 'waste-removal-cost-birmingham',
    title: 'How Much Does Waste Removal Cost in Birmingham?',
    description:
      'Understand the main factors that influence rubbish removal prices in Birmingham and what to consider before requesting a quote.',
    category: 'Household Waste',
    content: [
      {
        heading: 'What Affects Waste Removal Costs?',
        paragraphs: [
          'Waste removal costs depend on several factors, including the quantity of waste, the type of materials, loading requirements and access to the collection location.',
          'Heavy materials, awkward access and specialist disposal requirements can affect the work involved.',
        ],
      },
      {
        heading: 'The Amount and Type of Waste',
        paragraphs: [
          'A small collection of household items is different from a full property clearance or a large quantity of construction waste.',
          'Providing clear photographs and an accurate description can help a waste removal company understand the job before preparing a quote.',
        ],
      },
      {
        heading: 'How to Request an Accurate Quote',
        paragraphs: [
          'Describe the waste you need collected, provide your postcode and explain any access restrictions. Photographs can also help show the quantity and type of materials.',
          'Ask what is included in the quotation and whether any additional charges could apply.',
        ],
      },
      {
        heading: 'Waste Removal in Birmingham',
        paragraphs: [
          'GB Waste Removals offers household, garden, commercial and bulky waste collection services in Birmingham and surrounding areas.',
          'Contact our team with details of your clearance requirements to request a quote.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-dispose-of-garden-waste',
    title: 'How to Dispose of Garden Waste Responsibly',
    description:
      'Learn about common garden waste materials and the options available for responsible garden waste disposal.',
    category: 'Garden Waste',
    content: [
      {
        heading: 'What Counts as Garden Waste?',
        paragraphs: [
          'Garden waste commonly includes grass cuttings, leaves, hedge trimmings, weeds, branches and plants removed during garden maintenance.',
          'Larger branches, soil, rubble and treated timber may need different handling arrangements, so check what your chosen collection service accepts.',
        ],
      },
      {
        heading: 'Separate Your Garden Waste',
        paragraphs: [
          'Where practical, keep green waste separate from general household rubbish and other materials. This can make collection and subsequent processing easier.',
          'Avoid mixing garden waste with chemicals, liquids or unsuitable materials.',
        ],
      },
      {
        heading: 'Garden Waste Collection Options',
        paragraphs: [
          'Depending on the quantity and type of waste, options may include local council garden waste services, suitable composting arrangements or a private waste collection service.',
          'Check the accepted materials, collection arrangements and charges before booking.',
        ],
      },
      {
        heading: 'Garden Waste Removal Across the Midlands',
        paragraphs: [
          'GB Waste Removals provides garden waste collection services in Birmingham, Coventry, Leicester, Walsall and Wolverhampton.',
          'Get in touch to discuss the type and quantity of garden waste you need removed.',
        ],
      },
    ],
  },
  {
    slug: 'what-happens-to-waste-after-collection',
    title: 'What Happens to Your Waste After Collection?',
    description:
      'Discover how collected waste may be sorted, recovered, recycled or sent for appropriate disposal.',
    category: 'Recycling',
    content: [
      {
        heading: 'Waste Collection Is Only the First Step',
        paragraphs: [
          'After waste is collected, it must be taken to an appropriate facility for further handling. The process depends on the type of material and the facilities available.',
          'Different waste streams can require different sorting, treatment and disposal arrangements.',
        ],
      },
      {
        heading: 'Sorting and Material Recovery',
        paragraphs: [
          'At suitable facilities, materials may be separated into different streams. Reusable items and recyclable materials may be recovered where appropriate.',
          'Not every item can be recycled, and the available recovery options depend on material condition and local processing facilities.',
        ],
      },
      {
        heading: 'Responsible Waste Handling',
        paragraphs: [
          'Waste should be handled and transferred in accordance with applicable waste regulations. Choosing an appropriately registered waste carrier is an important part of responsible disposal.',
          'You should ask for relevant waste transfer documentation where required.',
        ],
      },
      {
        heading: 'Choosing a Waste Removal Company',
        paragraphs: [
          'Before arranging a collection, check that the waste carrier is appropriately registered and ask how your waste will be handled.',
          'GB Waste Removals provides waste collection services across Birmingham and the surrounding Midlands areas.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-dispose-of-bulky-furniture',
    title: 'Furniture Removal: How to Dispose of Bulky Items',
    description:
      'Explore practical ways to clear unwanted sofas, beds, wardrobes and other bulky furniture.',
    category: 'Furniture Removal',
    content: [
      {
        heading: 'Common Bulky Items',
        paragraphs: [
          'Bulky household items can include sofas, armchairs, beds, mattresses, wardrobes, tables and other large furniture.',
          'Before arranging collection, identify which items need removing and whether any require dismantling.',
        ],
      },
      {
        heading: 'Consider Reuse Before Disposal',
        paragraphs: [
          'If furniture is in suitable condition, consider whether it can be reused, donated or sold.',
          'Items that cannot reasonably be reused may need to be taken to an appropriate waste facility.',
        ],
      },
      {
        heading: 'Preparing Furniture for Collection',
        paragraphs: [
          'Make sure the collection team can safely access the items. Explain stairs, narrow doorways, parking restrictions or other access issues when requesting a quote.',
          'Photographs can help communicate the size and condition of the furniture.',
        ],
      },
      {
        heading: 'Furniture Removal Across Birmingham and the Midlands',
        paragraphs: [
          'GB Waste Removals offers furniture and bulky waste collection in Birmingham, Coventry, Leicester, Walsall and Wolverhampton.',
          'Contact us to discuss your items and arrange a suitable quotation.',
        ],
      },
    ],
  },
];

type Article = (typeof articles)[number];

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | GB Waste Removals',
    };
  }

  const url = `https://www.gbwasteremovals.co.uk/blog/${article.slug}`;

  return {
    title: `${article.title} | GB Waste Removals`,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: 'GB Waste Removals',
      type: 'article',
      locale: 'en_GB',
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const url = `https://www.gbwasteremovals.co.uk/blog/${article.slug}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: article.title,
        description: article.description,
        mainEntityOfPage: url,
        author: {
          '@type': 'Organization',
          name: 'GB Waste Removals',
        },
        publisher: {
          '@type': 'Organization',
          name: 'GB Waste Removals',
          url: 'https://www.gbwasteremovals.co.uk/',
        },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.gbwasteremovals.co.uk/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://www.gbwasteremovals.co.uk/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#071739]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-gray-500 mb-8"
        >
          <Link href="/" className="hover:text-[#CF142B]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#CF142B]">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#0A1F44]">{article.category}</span>
        </nav>

        <header className="mb-10">
          <span className="inline-block text-[#CF142B] font-bold uppercase tracking-wider text-sm mb-4">
            {article.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1F44] leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            {article.description}
          </p>
        </header>

        <div className="h-1 w-20 bg-[#CF142B] rounded-full mb-10" />

        <div className="space-y-10">
          {article.content.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">
                {section.heading}
              </h2>

              <div className="space-y-4">
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="text-gray-700 leading-8 text-base sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 bg-[#0A1F44] rounded-2xl p-7 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need Professional Waste Removal?
          </h2>

          <p className="text-white/85 leading-relaxed mb-7">
            Contact GB Waste Removals for household, garden,
            commercial and bulky waste collection across Birmingham,
            Coventry, Leicester, Walsall and Wolverhampton.
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center bg-[#CF142B] hover:bg-red-700 text-white font-bold px-7 py-3 rounded-xl transition-colors"
          >
            Request a Free Quote
          </Link>
        </section>

        <div className="mt-10">
          <Link
            href="/blog"
            className="text-[#CF142B] font-bold hover:underline"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>
    </main>
  );
}
