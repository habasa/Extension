"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.setItem("test", "테스트입니당.");
  }, []);

  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <p>chainwith extension Home Screen</p>
      <Link href="/test.html" rel="noopener noreferrer">
        Test 화면으로
      </Link>
    </div>
  );
}
