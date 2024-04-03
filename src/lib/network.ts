import { NextResponse } from "next/server";

/**
 *  通用报错
 * @param message
 * @param code
 * @returns
 */
export function errResp(message: string, code: number) {
  return NextResponse.json({ message: message }, { status: code });
}
