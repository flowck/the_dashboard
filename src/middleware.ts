import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (isDashboard(req.url)) {
    return handleDashboardRequests(req);
  }
}

function isDashboard(url: string): boolean {
  return url.includes("/dashboard/");
}

function handleDashboardRequests(req: NextRequest) {
  const token = req.cookies.get("authorization_token");
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

/*function validateJwt(token :string) {
  jwt.verify(token, "", {})
}*/

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
