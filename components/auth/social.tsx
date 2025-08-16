import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export const Social = () => {
    return (
        <div className="flex w-full items-center gap-x-2">
            <Button
                className="flex-1"
                variant="outline"
                size="lg"
                onClick={() => {}}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>

            <Button
                className="flex-1"
                variant="outline"
                size="lg"
                onClick={() => {}}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    );
};
