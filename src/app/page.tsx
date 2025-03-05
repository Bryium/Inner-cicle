import { Button } from "@heroui/react";
import { FaRegSmile } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Inner Circle</h1>
      <Link href="/members" passHref>
        <Button
          className="flex items-center space-x-2 bg-blue-500 text-white border border-blue-700 hover:bg-blue-700 rounded-lg"
          startContent={<FaRegSmile size={20} />}
        >
          <span>Click me</span>
        </Button>
      </Link>
    </div>
  );
}
