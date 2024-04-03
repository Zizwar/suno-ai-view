import { type ClassValue, clsx } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// yida
// https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/blob/e38b527ac2266b0077b51fa699a6a01bf575fa96/app/utils.ts#L17
export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);

    toast.success("Copy to clipboard");
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      toast.success("Copy to clipboard");
    } catch (error) {
      toast.error("Copy Failed");
    }
    document.body.removeChild(textArea);
  }
}
