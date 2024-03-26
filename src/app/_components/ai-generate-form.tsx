"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
type Props = {};

export default function AiInputForm({}: Props) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 阻止表单的默认提交行为

    // 获取表单内的输入元素，并从中提取值
    const formData = new FormData(e.currentTarget);
    const inputValue = formData.get("inputName") as string; // 'inputName' 是输入元素的 name 属性

    toast.success(`we are working on it, coming soon!`);
    // 这里可以处理 inputValue，例如发送到 API
  };
  return (
    <div className="mx-auto mt-6 max-w-md md:mt-12 md:max-w-xl">
      <form onSubmit={onSubmit} className="flex gap-2">
        <Input name="inputName" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
