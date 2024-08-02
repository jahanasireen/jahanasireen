import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";

// Custom Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Architect</span>
            <h1 className="h1">
              Hello I&apos;m, 
              <br/>
              <span className="text-accent">Jahana Sireen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Highly motivated expert in architecture with keen eye for details. Currenlty looking to obtain an architectural
              designer position with a progressive organization where my skills will be challenged.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                
                <a href="/jahanasireen/assets/portfolio_jahana sireen.n_.pdf" download="portfolio_jahana sireen_n">Download CV</a>
                {/* <span>Download CV</span> */}
                <FileDownIcon className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6"
                         iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
                         text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div> */}
        </div>
      </div>
      <Stats />
      {/* <Technologies /> */}
    </section>
  );
}
