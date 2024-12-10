import localFont from "next/font/local";

export const Barlow = localFont({
  src: [
    {
      path: "../app/fonts/Barlow/Barlow-Thin.ttf",
      weight: "100",
      style: "thin",
    },
    {
      path: "../app/fonts/Barlow/Barlow-ExtraLight.ttf",
      weight: "200",
      style: "extralight",
    },
    {
      path: "../app/fonts/Barlow/Barlow-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../app/fonts/Barlow/Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/Barlow/Barlow-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../app/fonts/Barlow/Barlow-SemiBold.ttf",
      weight: "600",
      style: "semiBold",
    },
    {
      path: "../app/fonts/Barlow/Barlow-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../app/fonts/Barlow/Barlow-ExtraBold.ttf",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "../app/fonts/Barlow/Barlow-Black.ttf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-barlow",
});
export const Almarai = localFont({
  src: [
    {
      path: "../app/fonts/Almarai/Almarai-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../app/fonts/Almarai/Almarai-Regular.ttf",
      weight: "400",
      style: "normal",
    },

    {
      path: "../app/fonts/Almarai/Almarai-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../app/fonts/Almarai/Almarai-ExtraBold.ttf",
      weight: "800",
      style: "extrabold",
    },
  ],
  variable: "--font-almarai",
});
