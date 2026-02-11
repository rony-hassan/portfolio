import Navbar from "@/components/navbar";
import AnimatedButton from "@/components/animated-button";


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-24 max-w-6xl mx-auto px-6">
        <section className="min-h-[70vh] flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I’m <span className="text-indigo-500">Rony</span> 👋
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
            Aspiring SQA Engineer skilled in Manual Testing, Automation Testing
            (Python + Selenium), API Testing, and Performance Testing.
          </p>

          <div className="mt-6 flex gap-4">
            <AnimatedButton
              href="#projects"
              bgLight="bg-indigo-600"
              bgDark="dark:bg-indigo-500"
            >
              View Projects
            </AnimatedButton>

            <AnimatedButton href="#contact">
              Contact Me
            </AnimatedButton>
          </div>

        </section>

        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-slate-700 dark:text-slate-300 max-w-3xl">
            I’m a Computer Science graduate from Green University of Bangladesh.
            I have practical experience in end-to-end software testing cycles,
            including manual testing, automation frameworks, API testing, and
            performance testing.
          </p>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Python, Selenium, Pytest, Postman, JMeter, SQL, Git, Manual Testing,
            Bug Reporting
          </p>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-slate-700 dark:text-slate-300">
            SauceDemo Automation Framework (POM), API Testing Collection, Manual
            Testing Reports...
          </p>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Email: your-email@gmail.com
          </p>
        </section>
      </main>
    </>
  );
}
