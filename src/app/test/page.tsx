"use client";
import Image from "next/image";
import Link from "next/link";

export default function Test() {
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <p>chainwith e xtension Test Page</p>
      <Link href="/index.html" rel="noopener noreferrer">
        Home화면으로
      </Link>
    </div>
  );
}
