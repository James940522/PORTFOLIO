const AboutContents = ({ contents }) => {
  return (
    <div>
      <img src={contents.img} alt="contentsIcon" width="32px" height="32px" />
      <div>{contents.title}</div>
      <div>{contents.contents}</div>
    </div>
  );
};

export default AboutContents;
