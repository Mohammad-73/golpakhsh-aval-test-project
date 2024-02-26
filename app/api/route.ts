import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import data from "./products.json";

export async function GET(request: NextApiRequest) {
  return new NextResponse(JSON.stringify(data), {
    status: 200,
  });
}
