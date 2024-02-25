// Components
import Comments from "components/Comments";
import Accordion from "shared/Accordion";
import Button from "shared/Button";
import Icon from "shared/Icon";
import Text from "shared/Text";

type Props = {};

const ProductContent = (props: Props): JSX.Element => {
    return (
        <div className="layered-box-shadow flex flex-col gap-4 p-3 bg-violet h-fit">
            <Text
                ElementTag="div"
                fontSize="text-lg"
                fontColor="text-grey6"
                fontWeight="font-bold"
                textContent={<>FITILLI KADIFE YAKALI KAPITONE MONT</>}
            />

            <Text
                ElementTag="div"
                fontSize="text-xl"
                fontColor="text-grey6"
                fontWeight="font-bold"
                textContent={<>$49.90</>}
            />

            <div className=" grid grid-cols-9 gap-2">
                {Array.from({ length: 6 }).map((val, index) => {
                    return (
                        <div
                            key={index}
                            className="border border-grey2 bg-grey1 p-1"
                        >
                            <div className="bg-[#000000] w-full h-7"></div>
                        </div>
                    );
                })}
            </div>
            <div>
                <select className="select-input w-full">
                    <option>XS </option>
                    <option>M </option>
                    <option>L </option>
                    <option>XL </option>
                </select>
            </div>
            <div className="flex justify-between">
                <Text
                    ElementTag="div"
                    fontSize="text-sm"
                    fontColor="text-grey6"
                    fontWeight="font-semibold"
                    textContent={"Model: 174 cm tall and size S"}
                />
                <Text
                    ElementTag="div"
                    fontSize="text-sm"
                    fontColor="text-grey6"
                    fontWeight="font-semibold"
                    extraClass="underline"
                    textContent={"Size Guide"}
                />
            </div>
            <div className="flex gap-4">
                <Button
                    sizes="text-sm w-full"
                    colors="bg-grey1"
                    buttonContent={<>Add to shopping bag</>}
                />

                <Button
                    colors="bg-grey1"
                    spacings="p-2"
                    extraClass="flex items-center"
                    buttonContent={
                        <>
                            <Icon name="favorite" />
                        </>
                    }
                />
            </div>
            <div className="">
                <Accordion headerContent={"REF 438129"} IsOpenOnLoaded={true}>
                    <Text
                        ElementTag="div"
                        fontSize="text-base"
                        fontColor="text-grey6"
                        fontWeight="font-bold"
                        textContent={
                            <>
                                %100 pamuklu, farklı renkleri mevcut, fermuarlı
                                ve üstü düğmeli, kemer köprülü, beş cepli,
                                straight yüksek bel jean.
                            </>
                        }
                    />
                </Accordion>
                <Accordion headerContent={"COMPOSITION & CARE"}>
                    <Text
                        ElementTag="div"
                        fontSize="text-base"
                        fontColor="text-grey6"
                        fontWeight="font-bold"
                        textContent={
                            <>
                                %100 pamuklu, farklı renkleri mevcut, fermuarlı
                                ve üstü düğmeli, kemer köprülü, beş cepli,
                                straight yüksek bel jean.
                            </>
                        }
                    />
                </Accordion>

                <Comments
                    commentHeader="REVIEWS (3)"
                    commentItems={["1", "2", "3"]}
                />
            </div>
        </div>
    );
};

export default ProductContent;
