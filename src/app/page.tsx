import { div } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Sir!</h1>
      <Link href="/blog">
        Blog
      </Link>
        <Link href="/login"> Login </Link>
    </>
  );
}
