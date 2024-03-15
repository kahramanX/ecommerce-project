import React from "react";

// Components
import ReactHelmet from "components/ReactHelmet";
import Text from "shared/Text";
import Button from "shared/Button";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <>
            <ReactHelmet titleName="NOT FOUND" description="NOT FOUND" />

            <div className="flex items-center justify-center h-screen">
                <div className="layered-box-shadow text-center bg-grey1 p-10">
                    <Text
                        fontSize="text-4xl mb-4"
                        fontWeight="font-bold"
                        fontColor="text-black"
                        textContent="OOPS! PAGE NOT FOUND"
                    />
                    <Text
                        fontSize="text-xl mb-4"
                        fontWeight="font-light"
                        fontColor="text-black"
                        textContent="THAT MEANS THE PAGE YOU'RE LOOKING FOR DOESN'T EXIST OR WAS MOVED"
                    />
                    <Link className="button p-2 text-md" to={"/"}>
                        Take me to the homepage
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
