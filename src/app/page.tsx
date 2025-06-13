"use client";

import { useState } from "react";
import slugify from "slugify";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CopyIcon, XCircleIcon } from "lucide-react";

export default function Home() {
  const [inputText, setInputText] = useState("");

  const slug = slugify(inputText, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });

  const handleCopy = async () => {
    if (!slug) {
      toast.error("No slug to copy!");
      return;
    }

    try {
      await navigator.clipboard.writeText(slug);
      toast.success("Slug copied to clipboard!", {
        description: slug,
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy slug to clipboard", {
        description: "Please try again or copy manually",
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[oklch(0.98_0.005_240)] to-[oklch(0.85_0.02_240)] dark:bg-gradient-to-br dark:from-[oklch(0.12_0_0)] dark:to-[oklch(0.25_0_0)] flex items-center justify-center p-4">
      {/* Floating background blobs */}
      <div className="absolute size-[300px] rounded-full blur-[100px] opacity-40 dark:opacity-60 -top-[150px] -left-[150px] bg-gradient-to-br from-[oklch(0.85_0.1_174)] to-[oklch(0.9_0.08_350)] dark:bg-gradient-to-br dark:from-[oklch(0.65_0.2_264)] dark:to-[oklch(0.55_0.15_295)] animate-[float_20s_ease-in-out_infinite]"></div>
      <div className="absolute size-[200px] rounded-full blur-[100px] opacity-40 dark:opacity-60 -bottom-[100px] -right-[100px] bg-gradient-to-br from-[oklch(0.8_0.12_320)] to-[oklch(0.95_0.05_65)] dark:bg-gradient-to-br dark:from-[oklch(0.75_0.25_320)] dark:to-[oklch(0.65_0.2_15)] animate-[float_20s_ease-in-out_infinite_-10s]"></div>

      <div className="w-full max-w-2xl relative">
        <div className="text-center mb-8">
          <h1 className="text-5xl/tight font-black tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white/90 dark:to-white/70 bg-clip-text text-transparent">
            Slugify
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              .it
            </span>
          </h1>
          <p className="text-gray-800 dark:text-white/70 text-lg font-medium">
            Convert any text into SEO-friendly slugs instantly.
          </p>
        </div>

        <Card className="bg-(--glass-card-bg) backdrop-blur-[30px] border-(--glass-card-border) shadow-(--glass-card-shadow) rounded-lg">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white/90 text-xl font-bold">
              Text to Slug Converter
            </CardTitle>
            <CardDescription className="text-gray-700 dark:text-white/60">
              Enter your text below and get an SEO-friendly slug perfect for
              URLs, filenames, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="input-text"
                className="text-sm font-medium text-gray-900 dark:text-white/80"
              >
                Original Text
              </label>
              <div className="relative">
                <Input
                  id="input-text"
                  placeholder="Enter text to convert..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="bg-(--glass-input-bg) backdrop-blur-[10px] border-(--glass-input-border) focus:bg-(--glass-input-focus-bg) focus:border-(--glass-input-focus-border) transition-all duration-300 text-base text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-white/40 pr-10"
                />
                {inputText && (
                  <Button
                    onClick={() => setInputText("")}
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 size-6 bg-transparent hover:bg-transparent dark:hover:bg-transparent text-gray-900 dark:text-white/80 hover:text-gray-700 dark:hover:text-white"
                    aria-label="Clear input"
                  >
                    <XCircleIcon className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="slug-output"
                className="text-sm font-medium text-gray-900 dark:text-white/80"
              >
                Generated Slug
              </label>
              <div className="flex gap-2">
                <Input
                  id="slug-output"
                  value={slug}
                  readOnly
                  placeholder="your-seo-friendly-slug"
                  className="bg-(--glass-input-bg) backdrop-blur-[10px] border-(--glass-input-border) focus:bg-(--glass-input-focus-bg) focus:border-(--glass-input-focus-border) transition-all duration-300 text-base font-mono text-gray-900 dark:text-white placeholder:text-gray-600 dark:placeholder:text-white/40"
                />
                <Button
                  onClick={handleCopy}
                  disabled={!slug}
                  variant="outline"
                  size="icon"
                  className="bg-(--glass-button-bg) backdrop-blur-[10px] border-(--glass-button-border) hover:bg-(--glass-button-hover-bg) hover:shadow-(--glass-button-hover-shadow) hover:-translate-y-0.5 transition-all duration-300 shrink-0 text-gray-900 dark:text-white/80 hover:text-gray-700 dark:hover:text-white"
                  aria-label="Copy slug"
                >
                  <CopyIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-sm text-gray-700 dark:text-white/50">
          <p>Perfect for URLs, filenames, and web development</p>
        </div>
      </div>
    </div>
  );
}
