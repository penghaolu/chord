import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { useSession } from "next-auth/react";

function SelectPlaylist() {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});
  const { data: session, status } = useSession();
  const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists";

  useEffect(() => {
    if (session?.user?.accessToken) {
      setToken(session.user.accessToken);
    }
    console.log(session.user.accessToken)
  }, [token]);

  const handleGetPlaylists = () => {
    axios
      .get(PLAYLIST_ENDPOINT, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <Button onClick={handleGetPlaylists}>Get Playlist</Button>;
}

export default SelectPlaylist;