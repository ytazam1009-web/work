"use client";

import { useEffect, useState } from "react";
import { Star, ExternalLink, Quote, CheckCircle2 } from "lucide-react";
import Script from "next/script";

type Review = {
  authorName: string;
  authorPhoto?: string;
  text: string;
  rating: number;
  reviewUrl?: string;
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewPageUrl, setReviewPageUrl] = useState("");
  const [businessRating, setBusinessRating] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/google-reviews");

        if (!res.ok) {
          throw new Error("Unable to fetch Google reviews");
        }

        const data = await res.json();

        setReviews(data?.reviews || []);
        setReviewPageUrl(data?.reviewPageUrl || "");
        setBusinessRating(data?.rating || 0);
        setReviewCount(data?.userRatingCount || 0);
      } catch (err) {
        console.error("Google reviews error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  const reviewSchema =
    reviews.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "GB Waste Removals Google Reviews",
          itemListElement: reviews.slice(0, 5).map((review, index) => ({
            "@type": "Review",
            position: index + 1,
            author: {
              "@type": "Person",
              name: review.authorName,
            },
            reviewBody: review.text,
            reviewRating: {
              "@type": "Rating",
              ratingValue: review.rating || 5,
              bestRating: 5,
            },
          })),
        }
      : null;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {reviewSchema && (
        <Script
          id="google-review-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
          }}
        />
      )}

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0A1F44] sm:text-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0A1F44]">
              <CheckCircle2 className="h-3.5 w-3.5 text-white" />
            </span>

            Google Reviews
          </div>

          <h2
            id="reviews-heading"
            className="text-3xl font-extrabold leading-tight text-[#0A1F44] sm:text-4xl lg:text-5xl"
          >
            What Our Customers Say
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
            Real customer feedback about our waste removal, rubbish collection,
            house clearance, garden waste removal, furniture clearance and
            commercial waste services.
          </p>

          {/* GOOGLE RATING */}
          {!loading && reviews.length > 0 && (
            <div className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">

              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                    className="text-[#F4B400]"
                  />
                ))}
              </div>

              {businessRating > 0 && (
                <span className="font-bold text-[#0A1F44]">
                  {businessRating.toFixed(1)}
                </span>
              )}

              {reviewCount > 0 && (
                <span className="text-sm text-gray-500">
                  Based on {reviewCount} Google reviews
                </span>
              )}

            </div>
          )}
        </div>

        {/* REVIEWS */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 sm:mt-12">

          {loading ? (
            <div className="w-full py-10 text-center text-gray-500">
              Loading Google reviews...
            </div>
          ) : reviews.length === 0 ? (
            <div className="w-full py-10 text-center text-gray-500">
              Google reviews are currently unavailable.
            </div>
          ) : (
            reviews.map((review, index) => (
              <a
                key={`${review.authorName}-${index}`}
                href={reviewPageUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full flex-col rounded-2xl border border-[#0A1F44] bg-[#0A1F44] p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >

                {/* Quote Icon */}
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Quote className="h-4 w-4 text-white/70" />
                </div>

                {/* Stars */}
                <div className="mb-5 flex items-center gap-1">
                  {Array.from({
                    length: Math.min(review.rating || 5, 5),
                  }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      fill="currentColor"
                      className="text-[#F4B400]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="flex-grow text-sm leading-7 text-white/90 sm:text-base">
                  "{review.text}"
                </p>

                {/* Reviewer */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">

                  {review.authorPhoto ? (
                    <img
                      src={review.authorPhoto}
                      alt={`${review.authorName} Google reviewer`}
                      className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.nextElementSibling?.classList.remove(
                          "hidden"
                        );
                      }}
                    />
                  ) : null}

                  {/* Fallback Avatar */}
                  <div
                    className={`${
                      review.authorPhoto ? "hidden" : ""
                    } flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white`}
                  >
                    {review.authorName?.charAt(0)?.toUpperCase() || "G"}
                  </div>

                  <div className="min-w-0 flex-grow">
                    <p className="truncate text-sm font-bold text-white">
                      {review.authorName}
                    </p>

                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="text-xs text-white/60">
                        Google Review
                      </span>

                      <span className="h-1 w-1 rounded-full bg-white/30" />

                      <span className="text-xs text-white/50">
                        Customer
                      </span>
                    </div>
                  </div>

                  <ExternalLink
                    size={15}
                    className="flex-shrink-0 text-white/50 transition-colors group-hover:text-white"
                  />

                </div>
              </a>
            ))
          )}

        </div>

        {/* VIEW ALL */}
        {!loading && reviews.length > 0 && reviewPageUrl && (
          <div className="mt-10 text-center sm:mt-12">

            <a
              href={reviewPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#CF142B] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#b81025] hover:shadow-lg"
            >
              View All Reviews on Google
              <ExternalLink size={16} />
            </a>

          </div>
        )}

      </div>
    </section>
  );
}