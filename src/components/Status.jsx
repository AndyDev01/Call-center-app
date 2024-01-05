const Status = ({ status }) => {
  switch (status) {
    case "Оставлена заявка":
      return (
        <div className="relative text-[rgb(41,129,51)] before:bg-[rgb(41,129,51)] text-sm before-item">
          {status}
        </div>
      );

    case "Нет связи":
      return (
        <div className="relative text-[#DD4C1E] before:bg-[#DD4C1E] text-sm before-item">
          {status}
        </div>
      );

    case "Назначена встреча":
      return (
        <div className="relative text-[#DD9C1E] before:bg-[#DD9C1E] text-sm before-item">
          {status}
        </div>
      );

    case "Карта изготовлена":
      return (
        <div className="relative text-[rgb(41,129,51)] before:bg-[rgb(41,129,51)] text-sm before-item">
          {status}
        </div>
      );
    case "В архиве":
      return (
        <div className="relative text-[rgb(124,124,124)] before:bg-[rgb(124,124,124)] text-sm before-item">
          {status}
        </div>
      );

    default:
      break;
  }
};

export default Status;
