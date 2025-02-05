import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist({
  playlistTracks,
  onRemove,
  onNameChange,
  onSave,
  playlistName,
}) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };
  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
