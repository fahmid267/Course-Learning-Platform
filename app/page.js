import CourseCard from "@/components/CourseCard";
import Image from "next/image";
import SlideShow from "@/components/SlideShow";
import { metadata } from "./layout";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center">
      <SlideShow />
    </div>
  );
}
