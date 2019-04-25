import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
    <Container>
        <div>
            <Nav main>
                <li>
                    <a href="">Browse</a>
                </li>
                <li>
                    <a href="">Radio</a>
                </li>
            </Nav>
            <Nav>
                <li>
                    <span>Your Library</span>
                </li>
                <li>
                    <a href="">Made For You</a>
                </li>
                <li>
                    <a href="">Recently Played</a>
                </li>
                <li>
                    <a href="">Songs</a>
                </li>
                <li>
                    <a href="">Albums</a>
                </li>
                <li>
                    <a href="">Artists</a>
                </li>
                <li>
                    <a href="">Stations</a>
                </li>
                <li>
                    <a href="">Local Files</a>
                </li>
                <li>
                    <a href="">Videos</a>
                </li>
                <li>
                    <a href="">Podcasts</a>
                </li>
            </Nav>
            <Nav>
                <li>
                    <span>PLAYLISTS</span>
                </li>
                <li>
                    <a href="">Best of Rock</a>
                </li>
            </Nav>
        </div>
        <NewPlaylist>
            <img src={AddPlaylistIcon} alt="Add playlist" />
            New playlist
        </NewPlaylist>
    </Container>
);

export default Sidebar;
