import { useGetPokemonsQuery } from "../../app/services/api";

interface PokemonItem {
  name: string;
  url: string;
}

export default function Pokemon() {
  const { data, error, isLoading } = useGetPokemonsQuery();
  return (
    <div>
      {isLoading ? (
        "Pokemons is Loading..."
      ) : (
        <div>
          <ul>
            {data.results.map(
              ({ name }: PokemonItem): JSX.Element => (
                <li key={name}>{name}</li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
