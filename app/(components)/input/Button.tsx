export default function Button({text, onClick, className, disabled} : Readonly<{text: string, onClick: () => void, className: string, disabled: boolean}>) {
    return (
        <button onClick={onClick} disabled={disabled} className={"rounded-lg p-2 bg-slate-500 text-black font-bold dark:bg-slate-300 " + className}>
            {text}
        </button>
    );
}