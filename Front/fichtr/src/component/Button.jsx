export default function Button({
                                   title,
                                   handleButton,
                                   theme,
                                   icon,
                                   type,
                                   id,
                                   dataDropdownToggle,
                                   className
                               }) {
    function selectTheme(theme) {
        switch (theme) {
            case "primary":
                return "bg-[#310046] hover:bg-[#510273] text-white";
            case "warning":
                return "bg-[#F9AD3B] hover:bg-[#FFC060] text-white";
            case "danger":
                return "bg-[#910000] hover:bg-[#BD0101] text-white";
            case "success":
                return "bg-[#009143] hover:bg-[#00BA56] text-white";
            case "pale":
                return "bg-[#F3D6FF] hover:bg-[#F7E5FF] text-[#4A46FF]";
            default:
                return "bg-[#310046] hover:bg-[#510273] text-white";
        }
    }

    return (
        <button
            type={type ? type : ""}
            className={`flex justify-center rounded items-center min-w-[8rem] min-h-[2.5rem] gap-2 px-2 ${selectTheme(
                theme
            )} ${className}`}
            id={id}
            data-dropdown-toggle={dataDropdownToggle}
            onClick={handleButton}
        >
            {icon ? icon : null}
            {title}
        </button>
    );
}
