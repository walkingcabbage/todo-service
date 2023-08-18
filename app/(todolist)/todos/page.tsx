import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import { BsPlusCircle, BsPlusCircleFill } from "react-icons/bs";
import TodoItem from "./TodoItem";
export default function TodoList() {
  return (
    <div className=" flex flex-col flex-1 m-4 max-w-xl">
      <div className=" mb-2">
        <p className=" text-xs ml-1">2023 / 08 / 16</p>
        <h4 className=" text-3xl font-bold">오전 11 : 10</h4>
      </div>
      <div className="flex justify-between text-2xl mb-7">
        <div className="flex space-x-2">
          <div className="flex items-center">
            <AiOutlineCheckCircle />
            <p className=" ml-1">할 일 : 2</p>
          </div>
          <div className="flex items-center">
            <AiFillCheckCircle />
            <p className=" ml-1">마친 일 : 1</p>
          </div>
        </div>
        <div className="flex items-center">
          <button>
            <BsPlusCircle />
          </button>
        </div>
      </div>
      <ul className=" space-y-2">
        <TodoItem />
      </ul>
    </div>
  );
}
