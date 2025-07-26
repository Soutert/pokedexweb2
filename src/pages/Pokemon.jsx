import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Pokemon = () => {
  const { pokemonId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemonData(data);
        setIsLoading(false);
        setHasError(undefined);
      })
      .catch((err) => {
        setHasError("An Error occurred while loading Pokémon");
        setIsLoading(false);
        setPokemonData(null);
      });
  }, [pokemonId]);

  return (
    <div className="pokemon-detail-container">
      {isLoading && <div className="text-center">Cargando...</div>}

      {hasError && <div className="text-red-500 text-center">{hasError}</div>}

      {pokemonData && (
        <div className="pokemon-detail-card">
          <h2 className="pokemon-name">
            #{pokemonData.id} {pokemonData.name}
          </h2>

          <div className="pokemon-images">
            <img src={pokemonData.sprites.front_default} alt="front" />
            <img src={pokemonData.sprites.back_default} alt="back" />
          </div>

          <div className="pokemon-types">
            {pokemonData.types.map((t) => (
              <span key={t.slot} className="type-badge">
                [{t.type.name}]
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
