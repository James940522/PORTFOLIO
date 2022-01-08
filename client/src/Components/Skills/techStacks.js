const TechStacks = ({ tech }) => {
  return (
    <div className="tech-stacks">
      <div className="stack-title">{tech.title}</div>
      <img src={tech.img} alt="tech-stacks" />
    </div>
  );
};

export default TechStacks;
