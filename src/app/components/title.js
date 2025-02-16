import Image from "next/image"
import title from "../art/title.png"

export default function Title() {
    return(
        <div className="flex justify-center">
            <div className="">
                <Image
                src={title}
                className="w-full"
                alt="Icon"
                />
            </div>
        </div>
    )
}