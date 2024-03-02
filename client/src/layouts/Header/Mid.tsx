import { Link } from "react-router-dom";

// Components
import Icon from "shared/Icon";
import Button from "shared/Button";

type Props = {};

const Mid = (props: Props): JSX.Element => {
    return (
        <div className="border bg-orange p-4 lg:relative">
            <div className="flex justify-between lg:justify-center">
                <Button
                    defaultStyles={false}
                    extraClass="block lg:hidden"
                    buttonContent={
                        <>
                            <Icon name="menu" />
                        </>
                    }
                />
                <Link
                    to={"/"}
                    className="z-10 text-2xl lg:text-4xl font-black text-center"
                >
                    PULL&BEAR
                </Link>
                <div className="flex gap-6 flex-wrap">
                    <Button
                        defaultStyles={false}
                        extraClass="block lg:hidden"
                        buttonContent={
                            <>
                                <Icon name="person" />
                            </>
                        }
                    />
                    <Button
                        defaultStyles={false}
                        extraClass="block lg:hidden"
                        buttonContent={
                            <>
                                <Icon name="local_mall" />
                            </>
                        }
                    />
                </div>
            </div>
            <div className="mt-4 lg:m-2 flex justify-between gap-4 xl:gap-0 xl:absolute top-2 left-2 right-2">
                <Button
                    sizes="w-full xl:w-auto"
                    colors="bg-grey1"
                    spacings="px-4 py-2"
                    buttonContent={<>FOR HER</>}
                />
                <Button
                    sizes="w-full xl:w-auto"
                    colors="bg-grey1"
                    spacings="px-4 py-2"
                    buttonContent={<>FOR HIM</>}
                />
            </div>
        </div>
    );
};

export default Mid;
