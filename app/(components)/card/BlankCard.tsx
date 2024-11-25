export default function BlankCard({width, height, children} : Readonly<{width: string, height: string, children: JSX.Element}>) {
    return (
        <div className={`fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4  ${width} ${height} opacity-70 rounded-xl
        border-2 dark:border-gray-600 bg-gradient-to-br dark:from-slate-800 dark:to-slate-700 bg-size-200 bg-left-top 
        shadow-[4px_4px_50px_5px_#a4a7ab] dark:shadow-[4px_4px_40px_1px_#3d495d] hover:bg-right-bottom border-gray-300 
        from-gray-200 to-slate-400 transition-all duration-300 overflow-hidden`}>
            {children}
        </div>
    );
}