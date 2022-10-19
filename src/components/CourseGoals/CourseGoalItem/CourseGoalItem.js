import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const DeleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={DeleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
