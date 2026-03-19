import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import "./styles.css";

const tabs = ["home", "projects", "contact"];

function App() {
  const [showContent, setShowContent] = useState(false);
  const [selectedTab, setSelectedTab] = useState("home");
  const bgGif =
    "https://cdn.jsdelivr.net/gh/MikeEmpire/mikeempire-portfolio@master/static/portfoliobg.gif";

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  const content = () => {
    if (selectedTab === "contact") {
      return <Contact />;
    }
    if (selectedTab === "projects") {
      return <Portfolio />;
    }
    return <Home />;
  };

  const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

  const pageStyles = {
    color: "#fff",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    zIndex: -2,
    justifyContent: "center",
    backgroundColor: "#000",
    fontFamily: "paralucent, Roboto, sans-serif, serif",
    overflow: "hidden",
  };

  const tabOptions = tabs.map((tab) => {
    const isSelected = tab === selectedTab;
    const className = isSelected ? "active-link" : "";
    return (
      <li
        className={`${className} cursor-pointer text-3xl mb-2 hover:text-emerald-300 w-2 transition-colors`}
        key={tab}
        onClick={() => setSelectedTab(tab)}
      >
        {capitalize(tab)}
      </li>
    );
  });

  return (
    <main style={pageStyles}>
      <AnimatePresence>
        {!showContent && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              className="text-4xl text-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
            >
              Welcome To Shaunak Harmalkar&apos;s Portfolio
            </motion.h1>
          </div>
        )}
      </AnimatePresence>
      {showContent && (
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <picture>
            <img
              src={bgGif}
              alt="Background"
              className="w-full h-full object-cover absolute"
              style={{ zIndex: 1 }}
            />
          </picture>
          <div className="flex flex-row max-600:flex-col md:h-screen max-600:h-screen">
            <div
              className="relative p-6 w-80 max-600:w-full"
              style={{
                zIndex: 2,
              }}
            >
              <section className="mb-8 max-600:flex max-600:flex-col max-600:gap-2">
                <h1 className="text-3xl">Shaunak Harmalkar</h1>
                <h2 className="text-xl">Software Developer</h2>
              </section>
              <ul>{tabOptions}</ul>
            </div>
            <div
              className="max-h-full relative w-full pr-10 pl-8 max-600:px-4"
              style={{
                zIndex: 2,
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab}
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  exit={{ opacity: 0, y: 100 }}
                  className="flex items-center h-full justify-end max-600:justify-center max-600:gap-6 max-600:w-screen"
                >
                  {content()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}

export default App;
