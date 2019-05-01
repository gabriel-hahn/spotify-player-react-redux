import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";

const Playlist = () => (
    <Container>
        <Header>
            <img
                src="https://pt.wikipedia.org/wiki/Concrete_and_Gold#/media/File:Foo_Fighters_-_Concrete_and_Gold_-_2017.jpg"
                alt="Playlist"
            />
            <div>
                <span>PLAYLIST</span>
                <h1>Rock Forever</h1>
                <p>13 musics</p>

                <button>PLAY</button>
            </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
            <thead>
                <th />
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>
                    <img src={ClockIcon} alt="Duration" />
                </th>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Add" />
                    </td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:26</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Add" />
                    </td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:26</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Add" />
                    </td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:26</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Add" />
                    </td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:26</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Add" />
                    </td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:26</td>
                </tr>
                <tr>
                    <td>
                        <img src={PlusIcon} alt="Add" />
                    </td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:26</td>
                </tr>
            </tbody>
        </SongList>
    </Container>
);

export default Playlist;
