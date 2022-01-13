function LinkContents({ contents }) {
  return (
    <div className="link-card">
      <div>
        <img src={contents.title} />
      </div>
    </div>
  );
}

export default LinkContents;
