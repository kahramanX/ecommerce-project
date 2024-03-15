import React from "react";

// Components
import Button from "shared/Button";

type Props = {};

const Pagination: React.FC<Props> = () => {
    return (
        <>
            <div className="flex max-w-full">
                <div className="flex gap-4 w-full">
                    <Button
                        sizes="text-sm"
                        colors="bg-grey1"
                        spacings="py-2 px-4"
                        buttonContent="1"
                    />
                    <Button
                        sizes="text-sm"
                        colors="bg-grey1"
                        spacings="py-2 px-4"
                        buttonContent="2"
                    />
                    <Button
                        sizes="text-sm"
                        colors="bg-grey1"
                        spacings="py-2 px-4"
                        buttonContent="3"
                    />
                    <Button
                        sizes="text-sm"
                        colors="bg-grey1"
                        spacings="py-2 px-4"
                        buttonContent="4"
                    />
                </div>
                <div>
                    <Button
                        sizes="text-sm"
                        colors="bg-grey1"
                        spacings="py-2 px-4"
                        buttonContent="20"
                    />
                </div>
            </div>
        </>
    );
};

export default Pagination;
