import {fetchRickAndMorty, rickAndMortyEpisodes} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import AntCardDos from "../components/AndCardDos";
import styles from './character.module.css'

interface EpisodesData {
  results: Array<{
      id: number;
      episode:string;
      name:string
  }>;
}

export const Episodes: React.FC = () => {
  const { data } = useSWR<EpisodesData>(rickAndMortyEpisodes, fetchRickAndMorty, {
    suspense: false,
});
  return(
      <>
        <h1>Episodes</h1>

        <div className={styles.container}>
                {data?.results.map((character) => (
                    <AntCardDos  key={character.id} name={character.name}  episode={character.episode}></AntCardDos>

                ))}
            </div>

      </>

  )
}
