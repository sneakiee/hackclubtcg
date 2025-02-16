import Image from "next/image"
import blueCaps from "../art/bluecaps.png"
import greenCaps from "../art/greencaps.png"

export default function packRip() {
    <div className="flex justify-center place-items-center">
        <div>
            <Image
            src={blueCaps}
            className="w-32"
            alt="Blue Bottle Caps"
            />
        </div>
        <div>
            <Image
            src={greenCaps}
            className="w-32"
            alt="Green Bottle Caps"
            />
        </div>
    </div>
    
}