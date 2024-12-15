'use client';

import HomePage from '../components/pages/Home';
import Projects from '../components/projects/Projects'
// import { useNavbarLayout } from '../context/NavbarLayoutContext';

export default function Home() {
  // const {isHorizontal} = useNavbarLayout();

  return (
    <main>
      <HomePage />
      <Projects />
    </main>
  );
}
