import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillDelete,
} from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
export default function TodoList() {
  return (
    <div className=" flex flex-col flex-1 m-4">
      <div className=" mb-2">
        <p className=" text-xs ml-1">2023 / 08 / 16</p>
        <h4 className=" text-3xl font-bold">오전 11 : 10</h4>
      </div>
      <div className="flex space-x-5 text-2xl mb-7">
        <div className="flex items-center">
          <AiOutlineCheckCircle />
          <p className=" ml-1">할 일 : 2</p>
        </div>
        <div className="flex items-center">
          <AiFillCheckCircle />
          <p className=" ml-1">마친 일 : 1</p>
        </div>
      </div>
      <ul className=" space-y-2">
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
      </ul>
    </div>
  );
}
