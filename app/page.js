import CourseCard from "@/components/CourseCard";
import Image from "next/image";
import { metadata } from "./layout";
import SlideShow from "@/components/SlideShow";

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center">
      <SlideShow />
    </div>
  );
}
