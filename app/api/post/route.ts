import { getInternalPostsBySlug } from "@/app/lib/post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug == null) {
    return NextResponse.json({ error: "slug not found" }, { status: 500 });
  }

  const post = getInternalPostsBySlug(slug);

  return NextResponse.json(post);
}
