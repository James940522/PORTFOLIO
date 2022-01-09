import "./techStacks.scss";

const TechStacks = ({ tech }) => {
  return (
    <div className="tech-stacks">
      <div className="stack-title">{tech.title}</div>
      <img className="stacks" src={tech.img} alt="tech-stacks" />
    </div>
  );
};

export default TechStacks;
