const CourseGoal = (props: { title: string; description: string }) => {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <h2>{props.description}</h2>
      </div>
      <button>DELETE</button>
    </article>
  );
};

export default CourseGoal;
