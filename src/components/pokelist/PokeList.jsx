import { useEffect, useState } from "react";
import usePokemonFetch from "./usePokemonFetch";
import Card from "../cards/Card";
import { useNavigate } from "react-router";
import "./Pokelist.css";

function getPokemonIdFromUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 2];
}

const PokeList = () => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const navigateTo = useNavigate();
  const [typesMap, setTypesMap] = useState({});

  const { pokemonJsonObject, isLoading, hasError, error } = usePokemonFetch(
    offset,
    limit
  );

  useEffect(() => {
    if (!pokemonJsonObject?.results) return;

    const fetchAllTypes = async () => {
      const entries = await Promise.all(
        pokemonJsonObject.results.map(async (p) => {
          const res = await fetch(p.url);
          const data = await res.json();
          const types = data.types.map((t) => t.type.name);
          return [p.name, types];
        })
      );

      const map = Object.fromEntries(entries);
      setTypesMap(map);
    };

    fetchAllTypes();
  }, [pokemonJsonObject]);

  return (
    <div className="poke-list">
      {!isLoading && !hasError && pokemonJsonObject?.results && (
        <>
          <div className="p-4">
            <h2 className="text-2xl font-bold text-center text-pantoneBlue mb-4">
              Lista de Pokemon
            </h2>
            <section className="card-holder">
              {pokemonJsonObject.results.map((p) => {
                const id = getPokemonIdFromUrl(p.url);
                const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                const types = typesMap[p.name] || [];

                return (
                  <Card
                    key={id}
                    imgUrl={imgUrl}
                    title={p.name}
                    description={types.join(", ")}
                    actionLabel="Go to Details"
                    action={() => navigateTo(`/pokelist/${id}`)}
                  />
                );
              })}
            </section>
          </div>
          <div className="load-more-container">
            <button
              className="load-more-button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOffset(offset + 20);
              }}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
      {hasError && <strong>Algo sucedió mal y no se puede cargar</strong>}
    </div>
  );
};

export default PokeList;
