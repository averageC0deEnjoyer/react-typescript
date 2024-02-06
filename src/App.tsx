import CourseGoal from './components/CourseGoal';
import indomieImage from './assets/indomie.jpeg';
import Header from './components/Header';

function App() {
  return (
    <main>
      <Header image={{ src: indomieImage, alt: 'indomie' }}>
        <h1>This is a header</h1>
      </Header>
      <CourseGoal title="Learn React+TS">
        <p>Lets Get Dirty with Typescript!</p>
      </CourseGoal>
    </main>
  );
}

export default App;
