import Toolbar from "../component/Bar/Toolbar";

export default function LayoutToolbarOnly(props) {
  return (
    <>
      <Toolbar />
      <div className="z-0 top-[8rem] relative w-full overflow-hidden bg-[#fafafa]">
        {props.children}
      </div>
    </>
  );
}
