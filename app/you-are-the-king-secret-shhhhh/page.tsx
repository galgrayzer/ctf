export default function Secret() {
    return (
        <>
            <div className="absolute left-1/2 -translate-x-1/2 h-full">
                <h1 className="relative text-center top-10 text-8xl font-extrabold text-red-400">No Shortcuts!</h1>
                <video autoPlay loop className="relative top-1/4 -translate-y-1/4 left-1/2 -translate-x-1/2">
                    <source src="/nevergonnagiveyouup.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <p className="fixed top-3/4 left-10 text-[#0a0a0a]">/etc/a/tmp/poppins/secret</p>
        </>
    );
}