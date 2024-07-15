interface Props {
    label: string;
    type: string;
    name: string;
    id: string;
    placeholder: string;
}

const InputComponent = (props: Props) => {
    return (
        <div className="mt=6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                {props.label}
            </label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-zinc-950 border border-gray-200 rounded-md dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div>
    );
};

export default InputComponent;