import { GOAT_IMAGE } from "@/constants/goat";

export function CategoryCard(){
    return (
        <div className="relative rounded-2xl">
            <img src={GOAT_IMAGE.src} className="rounded-xl" alt="country"/>
            <div className="bg-linear-to-t from-foreground/20 to-foreground/0  absolute z-99 h-full w-full rounded-xl top-0"></div>
            <p className="absolute bottom-2 text-shadow-2xs text-background font-bold text-xl p-2">Trekking</p>
        </div>
    )
}