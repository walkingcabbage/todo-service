import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillDelete,
} from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
export default function TodoItem() {
  return (
    <>
      <li className=" max-w-xl border-solid border-2 border-sky-900 rounded-md p-3 relative flex justify-between">
        <p className=" text-lg font-bold">마크업 하기</p>
        <div className=" relative bottom-0 right-0 space-x-1">
          <button className=" text-2xl">
            <AiOutlineCheckCircle />
          </button>
          <button className="text-2xl">
            <HiPencilAlt />
          </button>
          <button className="text-2xl">
            <AiFillDelete />
          </button>
        </div>
      </li>
    </>
  );
}
