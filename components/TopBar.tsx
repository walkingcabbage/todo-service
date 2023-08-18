import Link from "next/link";
import LoginBtn from "./(TopBar)/LoginBtn";
import LogoutBtn from "./(TopBar)/LogoutBtn";

export interface Props {
  name: string;
  email: string;
  image: string;
}

const TopBar = ({ loginsession }: { loginsession: Props }) => {
  console.log(`props`);
  console.log(loginsession);

  const baseUrl = "/";
  return (
    <header className="h-12 bg-gray-800 flex justify-between items-center z-50">
      <h1 className=" text-2xl p-2 text-gray-300">
        <Link href={baseUrl}>MUTTO</Link>
      </h1>
      <div className="flex items-center text-gray-300">
        <div className="mr-3 text-sm">
          {loginsession
            ? `${loginsession.name}님 환영합니다.`
            : "로그인 후 이용해주세요."}
        </div>
        <div className="mr-3">
          {loginsession ? <LogoutBtn /> : <LoginBtn />}
        </div>
      </div>
    </header>
  );
};
export default TopBar;
