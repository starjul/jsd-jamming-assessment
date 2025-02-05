import "./TrackList.css";
import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd, onRemove, isRemoval }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track
          track={track}
          key={track.id}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
        />
      ))}
    </div>
  );
};

export default TrackList;
