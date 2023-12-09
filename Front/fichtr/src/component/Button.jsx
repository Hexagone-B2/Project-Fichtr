export default function Button({ title, handleButton, theme, icon, type }) {
  function selectTheme(theme) {
    switch (theme) {
      case "primary":
        return "bg-[#310046] hover:bg-[#510273]";
      case "warning":
        return "bg-[#F9AD3B] hover:bg-[#FFC060]";
      case "danger":
        return "bg-[#910000] hover:bg-[#BD0101]";
      case "success":
        return "bg-[#009143] hover:bg-[#00BA56]";
      default:
        return "bg-[#310046] hover:bg-[#510273]";
    }
  }
  return (
    <button
      type={type ? type : ""}
      className={`text-white flex justify-center rounded items-center min-w-[8rem] min-h-[2.5rem] gap-2 px-2 ${selectTheme(
        theme
      )}`}
      onClick={handleButton}
    >
      {icon ? icon : null}
      {title}
    </button>
  );
}
