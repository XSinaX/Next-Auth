"use client";

import { Button } from "@/components/ui/button";

interface BackButtonProps {
    href: string;
    label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
    return (
        <Button variant="link" className="w-full font-normal" size="sm" asChild>
            <a href={href}>{label}</a>
        </Button>
    );
};
