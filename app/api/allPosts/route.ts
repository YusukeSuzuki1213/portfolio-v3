import { getAllPosts } from "@/app/lib/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const posts = getAllPosts();
  return NextResponse.json(posts);
}
