export async function GET() {
  return Response.json({
    hasKey: Boolean(process.env.GOOGLE_API_KEY),
    keyLength: process.env.GOOGLE_API_KEY?.length || 0,
    googleKeys: Object.keys(process.env).filter((k) =>
      k.toLowerCase().includes("google")
    ),
  });
}