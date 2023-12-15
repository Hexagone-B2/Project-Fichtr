import Tag from "./Tag";

export default function Tags({ tagNames }) {
    if (tagNames) return (
        <div className="flex justify-end">
            {tagNames.map((element) => (
                <Tag key={element} title={element} />
            ))}
        </div>
    );
}