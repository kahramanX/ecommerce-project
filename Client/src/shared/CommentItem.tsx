// Components
import Text from "shared/Text";

type Props = {
    commenterName: string;
    commenterDate: string;
    commentContent: string;
};

const CommentItem = ({
    commenterName,
    commentContent,
    commenterDate,
}: Props): JSX.Element => {
    return (
        <div className="border border-grey2 p-2 lg:p-4 mb-2 lg:mb-4">
            <div className="flex justify-between">
                <Text
                    ElementTag="div"
                    fontSize="text-base"
                    fontColor="text-grey6"
                    fontWeight="font-semibold"
                    extraClass="mb-2"
                    textContent={commenterName}
                />
                <Text
                    ElementTag="div"
                    fontSize="text-sm"
                    fontColor="text-grey4"
                    fontWeight="font-bold"
                    extraClass="mb-2"
                    textContent={commenterDate}
                />
            </div>
            <Text
                ElementTag="div"
                fontSize="text-base"
                fontColor="text-grey6"
                fontWeight="font-bold"
                textContent={commentContent}
            />
        </div>
    );
};

export default CommentItem;
