function LinkContents({ contents }) {
  const openConnect = (e, key) => {
    e.preventDefault();

    window.open(contents.link);
  };

  return (
    <div className="link-card">
      <div className="link-card-imgBox">
        <img src={contents.title} />
      </div>
      <span onClick={(e) => openConnect(e)}>{contents.link}</span>
    </div>
  );
}

export default LinkContents;
