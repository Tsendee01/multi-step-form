"use client"
import Image from "next/image";
export const AddOnsCard = ({ card, checked, option, onClick }: { card: any, checked: boolean, option: "monthly" | "yearly", onClick: () => void;}) => {
    return (
        <div className={`border rounded-xl border-cool-gray p-4 flex-1 hover:border-purplish-blue cursor-pointer ${checked && "border-purplish-blue bg-magnolia"}`} onClick={onClick}>
            <div className="flex gap-4 justify-between">
                <div className="flex gap-4">
                    <Image
                        src={checked ? "/assets/images/checkbox-svgrepo-com.svg" : "/assets/images/checkbox-unchecked-svgrepo-com.svg"}
                        alt={card.label}
                        width={30}
                        height={30}
                    />

                    <div>
                        <div className="font-ubuntu-bold text-marine-blue">
                            {card.label}
                        </div>
                        <div className="text-cool-gray text-sm">
                            {card.description}
                        </div>
                    </div>
                </div>
                <div className="text-sm text-purplish-blue flex justify-center items-center">
                    {option === "monthly" ? `+$${card.price}/mo` : `+$${card.price * 10}/yr`}
                </div>
            </div>
        </div>
    );
}