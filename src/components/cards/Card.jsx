import "./Cards.css";

const Card = ({
  imgUrl,
  title,
  description,
  types = [],
  actionLabel,
  action = () => {},
}) => {
return (
    <div className="card">
      <div className="card-header">
        <img src={imgUrl} alt={title} />
        <h1>{title}</h1>
      </div>

      <div className="card-body">
        <p>{description}</p>

        {/* Types Badges */}
        <div className="flex gap-1 mt-2 flex-wrap justify-center">
          {types.map((type) => (
            <span
              key={type}
              className="bg-green-800 text-white text-xs px-2 py-1 rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="card-footer">
        <button onClick={action}>{actionLabel}</button>
      </div>
    </div>
  );
};
export default Card;
