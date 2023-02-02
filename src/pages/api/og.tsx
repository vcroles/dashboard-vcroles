import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

const font = fetch(
    new URL("../../../assets/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const handler = async (req: NextRequest) => {
    try {
        const { searchParams } = new URL(req.url);
        const hasTitle = searchParams.has("title");
        const title = hasTitle
            ? searchParams.get("title")?.slice(0, 100)
            : "VC Roles | Discord Bot";

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const fontData = await font;

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        flexWrap: "nowrap",
                        backgroundColor: "white",
                        fontFamily: "Inter",
                        fontSize: 64,
                        lineHeight: 1.8,
                    }}
                >
                    <div tw="flex absolute">
                        <svg
                            viewBox="0 0 1155 678"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                filter: "blur(40px)",
                                transform:
                                    "scale(1.3) rotate(30deg) translateY(-100px) translateX(-50px)",
                                position: "relative",
                            }}
                        >
                            <path
                                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                                fillOpacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9089FC" />
                                    <stop offset="1" stopColor="#FF80B5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="256pt"
                            viewBox="0 0 512 512"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0,512) scale(0.1,-0.1)"
                                fill="#3F48CC"
                                stroke="none"
                            >
                                <path d="M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0 -2560z m3537 1342 c298 -250 515 -618 594 -1008 40 -204 38 -483 -7 -704 -51 -246 -196 -551 -352 -740 -87 -106 -206 -220 -228 -220 -22 0 -104 80 -104 101 0 7 42 55 93 108 153 159 220 253 308 434 213 444 208 960 -14 1402 -81 162 -158 267 -309 418 -76 77 -138 142 -138 146 0 11 51 85 68 99 23 18 25 17 89 -36z m-1076 -302 c19 -10 19 -33 19 -1038 0 -1055 0 -1052 -37 -1052 -7 0 -219 128 -471 285 l-459 285 -220 0 c-212 0 -221 1 -254 23 -18 12 -44 38 -57 57 l-23 34 3 372 c3 358 4 374 24 400 50 68 53 69 304 72 l229 3 457 285 c252 156 459 284 461 284 3 0 13 -5 24 -10z m848 -148 c246 -251 371 -552 371 -893 0 -208 -44 -392 -137 -574 -59 -117 -118 -198 -222 -307 -91 -96 -113 -112 -139 -103 -22 7 -72 78 -72 102 0 10 31 49 69 86 132 128 225 274 280 443 41 126 55 221 54 364 -2 304 -107 553 -325 773 -48 48 -88 92 -88 96 0 12 50 84 68 99 9 6 23 12 31 12 8 0 58 -44 110 -98z m-374 -300 c99 -81 189 -223 235 -367 30 -94 38 -281 17 -381 -33 -153 -107 -290 -222 -413 -84 -88 -106 -92 -159 -27 -20 23 -36 48 -36 54 0 6 25 34 56 64 78 73 148 184 180 282 22 66 27 101 27 186 0 188 -53 320 -185 454 -43 43 -78 86 -78 94 0 8 20 35 44 59 49 49 56 49 121 -5z" />
                            </g>
                        </svg>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            color: "black",
                            marginTop: 30,
                            whiteSpace: "pre-wrap",
                            alignItems: "center",
                        }}
                    >
                        <b>{title}</b>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 600,
                headers: {
                    "Cache-Control": "public, max-age=0, s-maxage=86400",
                },
            }
        );
    } catch (e) {
        return new Response("Failed to generate the image", { status: 500 });
    }
};

export default handler;
