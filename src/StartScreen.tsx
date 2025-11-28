import { AppPage } from "./AppPageLabels";
import worldIcon from "./assets/world.svg";
import map from "./assets/map.png";
import mapExample from "./assets/map_example.png";
import timelineExample from "./assets/timeline.png";
import quizExample from "./assets/QuizExample.png";
import ArrowsRight from "./assets/DoubleGreenArrows.png";
import { useEffect, useRef, useState } from "react";

interface StartScreenProps {
  goToPage: (page: AppPage) => void;
}

const StartScreen = ({ goToPage }: StartScreenProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [bgOpacity, setBgOpacity] = useState(1);
  const bgImgRef = useRef<HTMLDivElement>(null);
  const [scrollClicked, setScrollClicked] = useState<boolean>(false);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    function onScroll() {
      const scrollTop = el!.scrollTop;
      const fadeDistance = window.innerHeight * 3/4; // px before it fully fades
      const newOpacity = Math.max(0, 1 - scrollTop / fadeDistance);
      setBgOpacity(newOpacity);
      setScrollClicked(scrollTop!=0);
    }

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  async function scroll(y: number, time: number) {
    if (!scrollRef) return;
    const start = performance.now()
    const startY = scrollRef.current!.scrollTop;
    const endY = startY + y
    while (performance.now() < start + time) {
      const progress = (performance.now() - start) / time
      scrollRef.current!.scrollTo(0, startY + y * progress)
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    scrollRef.current!.scrollTo(0, endY)
  }

  return (
    <>
      {!scrollClicked && (
        <button
          onClick={() => {
            scroll(window.innerHeight, 1000);
            setScrollClicked(true);
          }}
          style={{ background: "none", border: "none" }}
          className={`
                      z-20
                      absolute 
                      left-1/2
                      top-5/6
                      -translate-x-1/2 
                      p-3 
                      `}
        >
          <img
            src={ArrowsRight}
            alt="Scroll Down"
            className="h-20 w-20 rotate-90"
          />
        </button>
      )}
      <div className="w-full h-full overflow-y-auto" ref={scrollRef}>
        <section
          ref={bgImgRef}
          className="h-screen w-full flex flex-col justify-center items-center text-center px-6 sticky top-0"
          style={{ backgroundImage: `url(${map})`, opacity: bgOpacity }}
        >
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-xl mb-6">
            AP World Study Website
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10">
            World History at a Glance
          </p>
          <button
            className="image-button transform hover:scale-110 transition-all"
            onClick={() => goToPage(AppPage.GEOGRAPHIC_SELECTION)}
          >
            <img
              src={worldIcon}
              className="p-2 h-28 w-28 drop-shadow-lg animate-pulse"
            />
          </button>
        </section>
        <section className="my-5 mx-15 text-left">
          <h2 className="text-4xl font-semibold mb-10">About</h2>
          <p className="text-left">
            AP World can be a really difficult class, covering dozens of empires
            all around the world across roughly eight centuries of history.
            Built by two students who earned 5s on the AP Exam, this website is
            designed to help you understand and synthesize the content in a
            visual, intuitive, and interactive way. And yet - content alone
            isn't enough to prepare yourself for success in AP World History -
            the exam is built on themes and historical thinking skills. What
            helped us most wasn't understanding every fact, but understanding
            how societies compare, change, and influence one another - and this
            website was built with that in mind. Whether your goal is to deepen
            your understanding of world history or score 5 on the AP Exam, this
            study tool offers a simple and effective path to get there. Click{" "}
            <span
              onClick={() => goToPage(AppPage.EXPLANATION)}
              className="text-blue-600 hover:underline mb-2"
            >
              here
            </span>{" "}
            to learn how to get started.{" "}
          </p>
        </section>
        <section className="my-40 mx-15 text-left">
          <h2 className="text-4xl font-semibold mb-10">Interactive Map</h2>
          <div className="flex flex-col md:flex-row items-start">
            <img
              src={mapExample}
              className="self-start w-full max-w-[400px] h-auto md:mr-10"
            />
            <p className="sm:mt-5">
              Explore world history with our interactive map, organized by the 6
              Collegeboard themes. You can see what was happening across regions
              at the same time, making connections and trends clearer. This
              feature helps you recognize broader global patterns and understand
              how different societies developed in relation to one another.
            </p>
          </div>
        </section>
        <section className="my-40 mx-15 text-left">
          <h2 className="text-4xl font-semibold mb-10">Timeline</h2>
          <div className="flex flex-col md:flex-row items-start">
            <img
              src={timelineExample}
              className="self-start w-full max-w-[400px] h-auto md:mr-10"
            />
            <p className="sm:mt-5">
              Track historical events in chronological order with our
              interactive timeline. Read about the Collegeboard theme, causes,
              and effects to gain a richer understanding of each event. By
              following the sequence of developments, you can see how one moment
              leads to the next and strengthen your sense of historical cause
              and effect.
            </p>
          </div>
        </section>
        <section className="my-40 mx-15 text-left">
          <h2 className="text-4xl font-semibold mb-10">Quiz</h2>
          <div className="flex flex-col md:flex-row items-start">
            <img
              src={quizExample}
              className="self-start w-full max-w-[400px] h-auto md:mr-10"
            />
            <p className="sm:mt-5">
              Test your historical thinking skills with our quiz feature, which
              gives you two randomly selected countries from a time period and
              challenges you to compare them. After you come up with
              similarities and differences, check your answer with each
              country's notes. It’s a simple way to practice comparison and
              reinforce thematic understanding.
            </p>
          </div>
        </section>
        <section className="mt-40 text-left">
          <div className="my-1 py-5 px-15 bg-green-800">
            <h2 className="text-2xl font-semibold mb-10 mt-5">
              Have suggestions?
            </h2>
            <form
              className="flex flex-col gap-4"
              action="https://formspree.io/f/mdkrdgbg"
              method="POST"
            >
              <label>
                Your email:{" "}
                <input
                  className="my-2 border p-3 rounded w-full bg-white"
                  type="email"
                  name="email"
                ></input>
              </label>
              <label>
                Your message:{" "}
                <textarea
                  className="my-2 border p-3 rounded w-full bg-white"
                  name="message"
                ></textarea>
              </label>
              <button className="mb-5" type="submit">
                Send
              </button>
            </form>
          </div>
        </section>
        <section className="my-1">
          <p className="text-xs">
            Notes were taken from The Earth and Its Peoples - AP Edition - 4th
            ED, World History: Modern (1200-Present) AP ED, and class materials.
            Images were sourced from Unsplash and Pixabay
          </p>
        </section>
      </div>
    </>
  );
};

export default StartScreen;
