import type React from "react";

import SomeText from "./components/SomeText";

interface HomeComponentProps {}

const Home: React.FC<HomeComponentProps> = () => {
  return <SomeText />;
};

export default Home;
