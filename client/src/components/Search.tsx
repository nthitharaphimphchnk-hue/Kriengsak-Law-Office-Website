import { useState, useEffect } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { searchContent, type SearchResult } from "@/lib/searchData";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  // Handle search
  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchContent(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  // Close search on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "service":
        return "bg-blue-100 text-blue-800";
      case "article":
        return "bg-green-100 text-green-800";
      case "faq":
        return "bg-purple-100 text-purple-800";
      case "page":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "service":
        return "บริการ";
      case "article":
        return "บทความ";
      case "faq":
        return "คำถามที่พบบ่อย";
      case "page":
        return "หน้า";
      default:
        return category;
    }
  };

  return (
    <div className="relative">
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="ค้นหา"
      >
        <SearchIcon className="w-5 h-5" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4">
            {/* Search Input */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-2">
                <SearchIcon className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ค้นหาบริการ บทความ คำถาม..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="flex-1 outline-none text-lg"
                />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setQuery("");
                  }}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="ปิด"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="divide-y">
                  {results.map((result) => (
                    <Link key={result.id} href={result.url}>
                      <a className="p-4 hover:bg-gray-50 transition-colors block">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {result.title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {result.description}
                            </p>
                          </div>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${getCategoryColor(
                              result.category
                            )}`}
                          >
                            {getCategoryLabel(result.category)}
                          </span>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              ) : query.trim() ? (
                <div className="p-8 text-center text-gray-500">
                  <p>ไม่พบผลการค้นหาสำหรับ "{query}"</p>
                  <p className="text-sm mt-2">ลองค้นหาด้วยคำอื่นๆ</p>
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <p>พิมพ์เพื่อค้นหา</p>
                </div>
              )}
            </div>

            {/* Footer */}
            {results.length > 0 && (
              <div className="p-3 border-t bg-gray-50 text-xs text-gray-600">
                พบ {results.length} ผลการค้นหา
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
