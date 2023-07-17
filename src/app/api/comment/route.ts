import { NextResponse } from "next/server";
import { createComment } from "@/lib/comments";

export async function POST(request: Request) {
  const body = await request.json();

  const resJson = await createComment(body);

  if (resJson.errors) {
    return NextResponse.json(
      {
        message: resJson.errors[0].message,
        body: body,
      },
      { status: 500 }
    );
  }

  if (!resJson.data.createComment?.success) {
    return NextResponse.json(
      { message: "Some error occurred" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Your comment is awaiting approval" },
    { status: 200 }
  );
}
