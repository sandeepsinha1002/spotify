import {useRecoilState } from 'recoil';
import { useSession } from "next-auth/react"
import { useState,useEffect} from 'react';

import { playingTrackState } from '../atoms/playerAtom'
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import Player from './Player'
var SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId:process.env.SPOTIFY_CLIENT_ID,
})

export default function Dashboard() {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShowPlayer(true);
  }, []);

  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };
  return (
    <main className="flex min-h-screen min-w-full bg-black lg:pb-24">
        <Sidebar/>
        <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack}/>
        <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack}/>
        <div className="fixed bottom-0 left-0 right-0 z-50">
        <Player accessToken={accessToken} trackUri={playingTrack.uri} />
      </div>
    </main>
  )
}
