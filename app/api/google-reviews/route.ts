export async function GET() {
  const API_KEY = process.env.GOOGLE_API_KEY;

  // Put your current GB Waste Removals Google Place ID here
  const PLACE_ID = "ChIJd2YeYpkFu28R7HE75r_ja-s";

  if (!API_KEY) {
    return Response.json(
      { error: "GOOGLE_API_KEY is not configured." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask":
            "id,name,displayName,formattedAddress,rating,userRatingCount,reviews",
        },
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return Response.json(
        { error: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();

    const reviews =
      data.reviews?.map((review: any) => ({
        authorName:
          review.authorAttribution?.displayName || "Google Reviewer",
        authorPhoto: review.authorAttribution?.photoUri || "",
        text: review.text?.text || review.originalText?.text || "",
        rating: review.rating || 5,
        reviewUrl: review.authorAttribution?.uri || "",
      })) || [];

    const reviewPageUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      data.displayName?.text || data.name || "GB Waste Removals"
    )}`;

    return Response.json({
      reviews,
      reviewPageUrl,
      businessName: data.displayName?.text || "",
      rating: data.rating || 0,
      userRatingCount: data.userRatingCount || 0,
    });
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to fetch Google reviews.",
      },
      { status: 500 }
    );
  }
}