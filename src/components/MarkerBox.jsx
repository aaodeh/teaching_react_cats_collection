const MarkerBox = ({ info, onCloseInfoBox }) => {
  return (
    <div className="marker-info">
      <h2>Cat Info</h2>
      <ul>
        <li>
          NAME: <strong>{info.name}</strong>
        </li>
        <li>
          USER: <strong>{info.username}</strong>
        </li>
        <li>
          EMAIL: <strong>{info.email}</strong>
        </li>
      </ul>
      <div className="close" onClick={onCloseInfoBox}>
        X
      </div>
    </div>
  );
};

export default MarkerBox;
