"use client";
import DefaultErrorPage from "next/error";

export default function Home() {
  return <DefaultErrorPage statusCode={418} title="I'm a teapot" />;
}
