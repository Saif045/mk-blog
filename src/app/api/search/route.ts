import { NextResponse } from "next/server";
import { searchPosts } from "@/lib/posts";

export async function POST(request: Request) {
  const body = await request.json();
  const resJson = await searchPosts(body);

  if (resJson) {
    return NextResponse.json(
      resJson ,
      { status: 200 }
    );
  }
  return

}
