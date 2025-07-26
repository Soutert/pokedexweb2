import "./Cards.css";

const Card = ({
  imgUrl,
  title,
  description,
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
        <div className="flex flex-wrap gap-1 justify-center">
          {description.split(",").map((type) => (
            <span
              key={type}
              className="text-xs bg-green-800 text-white px-2 py-1 rounded-full font-mono"
            >
              [{type.trim()}]
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
