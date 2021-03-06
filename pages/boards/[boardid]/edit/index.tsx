import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";
import { FETCH_BOARD } from "../../../../src/components/units/boards/nonmembership/detail/detail.queries";
import NewPage from "../../new";

export default function EditPage() {
  const router = useRouter();
  const { loading, data } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardid) },
  });
  if (loading) {
    return "Loading...";
  }

  return <NewPage isEdit={true} data={data} />;
}
