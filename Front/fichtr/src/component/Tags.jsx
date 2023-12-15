import Tag from "./Tag";

export default function Tags({ tagNames }) {
  return (
    <div className="flex justify-end">
        {tagNames.map((element) => (
            <Tag title={element} />
        ))}
    </div>
  );
}