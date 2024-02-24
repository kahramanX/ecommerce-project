// Components
import Text from "shared/Text";

type Props = {};

const Search = (props: Props) => {
    return (
        <>
            <Text
                ElementTag="div"
                fontSize="text-md"
                fontColor="text-grey6"
                fontWeight="font-bold"
                textContent="SEARCH"
            />
        </>
    );
};

export default Search;
