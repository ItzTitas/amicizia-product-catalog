import { Metadata } from "next";
import HomePage from "./home-page";
export const metadata: Metadata = {
  title: "Amicizia Life Science | Veterinary,Livestock,Canine & Poultry Healthcare Products in India",
};

export default function Home() {
  return <HomePage />;
}
