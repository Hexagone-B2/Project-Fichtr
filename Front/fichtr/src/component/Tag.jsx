export default function Tag({ title }) {
    return (
        <kbd className="text-center px-2 py-1.5 m-2 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
            {title}
        </kbd>
    );
}