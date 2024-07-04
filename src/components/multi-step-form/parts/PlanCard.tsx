"use client"
import Image from "next/image";
export const PlanCard = ({ card, option, setPlan, plan }: { card: any, option: "monthly" | "yearly", setPlan: (plan: number) => void, plan: number }) => {
    return (
        <div className={`border rounded-xl border-cool-gray p-4 flex-1 hover:border-purplish-blue cursor-pointer ${plan === card.id && "bg-magnolia border-purplish-blue"}`} onClick={() => setPlan(card.id)}>
            <div className="flex gap-4 md:flex-col md:gap-12">
                <div>
                    <Image
                        src={card?.image}
                        alt={card?.label}
                        width={45}
                        height={45}
                    />
                </div>
                <div>
                    <div className="font-ubuntu-bold text-marine-blue">
                        {card.label}
                    </div>
                    <div className="text-sm text-cool-gray">
                        {option === "monthly" ? `$${card.price}/mo` : `$${card.price * 10}/yr`}
                    </div>
                    {option === "yearly" && (
                        <div className="text-sm text-marine-blue">
                            2 months free
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}