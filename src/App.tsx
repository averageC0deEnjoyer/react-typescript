import CourseGoal from './components/CourseGoal';
import indomieImage from './assets/indomie.jpeg';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import { useState } from 'react';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevState) => {
      const newGoal: CourseGoal = {
        title: 'test',
        description: 'test',
        id: Math.random(),
      };
      return [...prevState, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    const newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
  }

  return (
    <main>
      <Header image={{ src: indomieImage, alt: 'indomie' }}>
        <h1>This is a header</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
