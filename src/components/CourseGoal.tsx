import { type ReactNode } from 'react';

type PropsType = {
  title: string;
  children: ReactNode;
  handleDeleteGoal: (a: number) => void;
  goalId: number;
};

// type PropsType = PropsWithChildren<{ title: string }>;

const CourseGoal = ({
  title,
  children,
  handleDeleteGoal,
  goalId,
}: PropsType) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button
        onClick={() => {
          handleDeleteGoal(goalId);
        }}
      >
        DELETE
      </button>
    </article>
  );
};

export default CourseGoal;
