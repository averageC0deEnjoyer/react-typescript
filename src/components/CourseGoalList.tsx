import CourseGoal from './CourseGoal';
import { CourseGoal as CourseGoalType } from '../App';

type PropsType = {
  goals: CourseGoalType[];
  handleDeleteGoal: (a: number) => void;
};

const CourseGoalList = ({ goals, handleDeleteGoal }: PropsType) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            title={goal.title}
            goalId={goal.id}
            handleDeleteGoal={handleDeleteGoal}
          >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
