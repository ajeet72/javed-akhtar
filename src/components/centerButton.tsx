
export default function CenterButton({name}: {name: string}) {
    return (
        <div className="flex items-center justify-center py-24">
            <div className="border-2 border-slate-600 px-3 py-2 rounded-xl text-slate-300">{name}</div>
        </div>
    )
}