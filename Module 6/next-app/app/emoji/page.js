"use client";
import { EmojiChanger } from "@/Components/Emoji";
import { EmojiProvider } from "@/Context/EmojiContext";

function Page() {
  return (
    <div>
      <h1>Emoji changer</h1>
      <EmojiProvider>
        <EmojiChanger />
      </EmojiProvider>
    </div>
  );
}

export default Page;
