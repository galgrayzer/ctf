export default function InputBuild({label, placeholder, type, value, className, setValue} : Readonly<{label: string, placeholder: string, type: string, value: string, className: string, setValue: (value: string) => void}>) {
    return (
        <div className={"flex flex-col space-y-1 " + className}>
            <label className="text-lg font-bold text-white ">{label}</label>
            <input type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} className="font-bold rounded-lg p-2 bg-slate-300 text-black w-full"/>
        </div>
    );
}