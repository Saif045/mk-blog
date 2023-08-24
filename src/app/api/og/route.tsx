import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Default title";

    const hasImg = searchParams.has("img");
    const img = hasImg && searchParams.get("img");
    console.log(img)
    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: `url(${
              img
                ? "https://mohamed-khaled-45.000webhostapp.com/wp-content/uploads/2023/07/3793959-248x300.jpg"
                : "https://cruip-tutorials-next.vercel.app/social-card-bg.jpg"
            } )`,
            backgroundSize: "100% 100%",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "40px 80px",
          }}>
          <div
            style={{
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              lineHeight: 1,
              color: "white",
              marginBottom: 24,
              whiteSpace: "pre-wrap",
            }}>
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
